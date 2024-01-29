CREATE VIEW latest_global_commission AS
SELECT
    cg.id,
    cg.from_date,
    percentage
FROM global_commission
JOIN (
    SELECT
        id,
        MAX(from_date) AS from_date
    FROM global_commission
    GROUP BY id
) AS cg
    ON cg.id = global_commission.id
    AND cg.from_date = global_commission.from_date
UNION ALL
SELECT
    -1,
    NOW(),
    0
WHERE NOT EXISTS (
    SELECT 1
    FROM global_commission
    JOIN (
        SELECT
            id,
            MAX(from_date) AS from_date
        FROM global_commission
        GROUP BY id
    ) AS cg
        ON cg.id = global_commission.id
        AND cg.from_date = global_commission.from_date
)
;

CREATE VIEW latest_car_model_commission AS
SELECT
    commission.id,
    c.car_model_id,
    commission.percentage,
    c.from_date
FROM commission
JOIN (
    SELECT
        car_model_id,
        MAX(from_date) AS from_date
    FROM commission
    GROUP BY car_model_id
) AS c
    ON c.car_model_id = commission.car_model_id
    AND c.from_date = commission.from_date
;

CREATE VIEW latest_commission AS
SELECT
    COALESCE(latest_car_model_commission.id, -1) AS id,
    car_model.id AS car_model_id,
    COALESCE(latest_car_model_commission.from_date, NOW()) AS from_date,
    COALESCE(latest_car_model_commission.percentage, global_commission.percentage) AS percentage
FROM car_model
LEFT JOIN latest_car_model_commission
    ON latest_car_model_commission.car_model_id = car_model.id
CROSS JOIN (
    SELECT
        COALESCE(percentage, 0) AS percentage
    FROM latest_global_commission
    LIMIT 1 -- This view is supposed to return a single row, this is for a security reason
) AS global_commission
;

CREATE VIEW sold_announcements AS
SELECT
    *
FROM announcement
WHERE status >= 20;

CREATE VIEW province_ranking AS
SELECT
    province.id AS province_id,
    province.name AS province_name,
    COALESCE(sold_announcement_count, 0) AS sold_announcement_count,
    COALESCE(total_sales, 0) AS total_sales,
    COALESCE(total_commissions, 0) AS total_commissions,
    ranking.month,
    ranking.year
FROM province
LEFT JOIN (
    SELECT
        province_id,
        COUNT(id) AS sold_announcement_count,
        SUM(price) AS total_sales,
        SUM(price * commission / 100) AS total_commissions,
        EXTRACT(MONTH FROM sale_date) AS month,
        EXTRACT(YEAR FROM sale_date) AS year
    FROM sold_announcements
    GROUP BY 
        year,
        month,
        province_id
) AS ranking
    ON province.id = ranking.province_id
ORDER BY 
    year DESC NULLS LAST,
    month DESC NULLS LAST,
    sold_announcement_count DESC
;

CREATE VIEW brand_ranking AS
SELECT
    brand.id AS brand_id,
    brand.name AS brand_name,
    COALESCE(sold_count, 0) AS sold_count,
    COALESCE(total_sales, 0) AS total_sales,
    COALESCE(total_commissions, 0) AS total_commissions,
    ranking.month,
    ranking.year
FROM brand
LEFT JOIN (
    SELECT
        brand.id AS brand_id,
        COUNT(sold_announcements.id) AS sold_count,
        SUM(price) AS total_sales,
        SUM(price * commission / 100) AS total_commissions,
        EXTRACT(MONTH FROM sale_date) AS month,
        EXTRACT(YEAR FROM sale_date) AS year
    FROM sold_announcements
    JOIN car_model
        ON car_model.id = sold_announcements.car_model_id
    JOIN brand
        ON brand.id = car_model.brand_id
    GROUP BY 
        year,
        month,
        brand.id 
) AS ranking
    ON brand.id = ranking.brand_id
ORDER BY 
    ranking.year DESC NULLS LAST,
    ranking.month DESC NULLS LAST,
    ranking.sold_count DESC
;

CREATE VIEW months AS
SELECT 
    DISTINCT EXTRACT(MONTH FROM DATE_TRUNC('month', d)) AS month
FROM generate_series (
    DATE_TRUNC('year', CURRENT_DATE),
    DATE_TRUNC('year', CURRENT_DATE) + INTERVAL '1 year - 1 day',
    '1 month'::interval
) AS d
ORDER BY month ASC
;

CREATE VIEW monthly_sales AS
SELECT
    months.month,
    COALESCE(total_sales, 0) AS total_sales,
    COALESCE(total_commissions, 0) AS total_commissions,
    COALESCE(year, EXTRACT(YEAR FROM NOW())) AS year
FROM months
LEFT JOIN (
    SELECT
        SUM(price) AS total_sales,
        SUM(price * commission / 100) AS total_commissions,
        EXTRACT(MONTH FROM sale_date) AS month,
        EXTRACT(YEAR FROM sale_date) AS year
    FROM sold_announcements
    WHERE EXTRACT(YEAR FROM sale_date) = EXTRACT(YEAR FROM NOW())
    GROUP BY
        year,
        month
    ORDER BY 
        month ASC
) AS monthly_sales
    ON months.month = monthly_sales.month
;

CREATE VIEW annual_sales AS
SELECT
    SUM(price) AS total_sales,
    SUM(price * commission / 100) AS total_commissions,
    EXTRACT(YEAR FROM sale_date) AS year
FROM sold_announcements
WHERE EXTRACT(YEAR FROM sale_date) = EXTRACT(YEAR FROM NOW())
GROUP BY
    year
ORDER BY 
    year ASC
;

CREATE VIEW global_stat AS
SELECT
    COALESCE(total_sales, 0) AS total_sales,
    COALESCE(total_commissions, 0) AS total_commissions,
    users_count.count AS users_count,
    pending_announcement_count.count AS pending_announcement_count
FROM (
    SELECT
        SUM(price) AS total_sales,
        SUM(price * commission / 100) AS total_commissions
    FROM sold_announcements   
) AS gs
CROSS JOIN (
    SELECT COUNT(id) AS count FROM users
) AS users_count
CROSS JOIN (
    SELECT COUNT(id) AS count FROM announcement WHERE status = 0
) AS pending_announcement_count
;
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

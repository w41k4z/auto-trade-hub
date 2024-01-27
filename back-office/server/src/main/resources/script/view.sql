CREATE VIEW latest_commission AS 
SELECT
    c.*,
    commission.percentage
FROM commission
JOIN (
    SELECT
        id,
        MAX(from_date) AS from_date
    FROM commission
) AS c
    ON c.id = commission.id
    AND c.from_date = commission.from_date
;
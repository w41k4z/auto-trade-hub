CREATE VIEW latest_commission AS 
SELECT
    c.*,
    commission.percentage
FROM commision
JOIN (
    SELECT
        id,
        MAX(from_date) AS from_date
    FROM commision
) AS c
    ON c.id = commision.id
    AND c.from_date = commision.from_date
;
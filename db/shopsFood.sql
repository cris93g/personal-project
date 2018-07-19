SELECT f.* FROM food f
JOIN shops s ON f.shop_id = s.id
WHERE f.shop_id = $1

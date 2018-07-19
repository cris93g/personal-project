select c.id, f.name, f.category, f.rating, f.cost, f.image_url,  c.user_id, c.quantity from cart c
join food f
on f.id = c.food_id
where user_id = $1;
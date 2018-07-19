insert into cart
(quantity, food_id, user_id)
values
($1, $2, $3)
returning *;
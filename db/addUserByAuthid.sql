INSERT INTO users (name, email, authid)
VALUES ($1, $2, $3) RETURNING *;
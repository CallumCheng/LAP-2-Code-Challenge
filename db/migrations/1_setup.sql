DROP TABLE IF EXISTS thought;

CREATE TABLE thought (
    id SERIAL PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    author VARCHAR(50) NOT NULL,
    post VARCHAR(500) NOT NULL
);
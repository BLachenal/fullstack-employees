DROP TABLE IF EXISTS employees;


CREATE TABLE IF NOT EXISTS employees (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    birthday DATE NOT NULL,
    salary INT NOT NULL
);
DROP DATABASE IF EXISTS burgers_db; 
CREATE DATABASE burgers_db;
use burgers_db;

CREATE TABLE burgers (
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(20) NOT NULL, 
    devoured BOOLEAN default false,
    PRIMARY KEY (id)
);
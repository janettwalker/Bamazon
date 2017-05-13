-- Creates the bamazon database --
CREATE DATABASE bamazonDB;

-- Makes it so all of the following code will affect bamazonDB --
USE bamazonDB;

-- Creates the table "products" within bamazonDB --
CREATE TABLE products (
	item_id INTEGER(20) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(50) NOT NULL,
	department_name VARCHAR(30),
	price INTEGER(100),
	stock_quantity INTEGER(100),
	PRIMARY KEY(item_id)
);



INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES 
("vitamins", "health and wellness", 7.00, 50),
("emerald necklace", "jewelry", 50.00, 5),
("guitar", "music", 75.00, 10),
("yoga mat", "health and wellness", 12.00, 42),
("summer dress", "clothing", 14.00, 56),
("sandals", "shoes", 32.99, 34),
("rain boats", "shoes", 48.95, 66),
("nintendo-ds", "electronics", 59.99, 20),
("flat screen television", "electronics", 129.64, 11),
("essential oils", "health and wellness", 18.99, 24),
("mood ring", "jewelry", 12.99, 53),

SELECT * FROM bamazonDB.products;
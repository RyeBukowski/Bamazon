CREATE DATABASE Bamazon;

USE Bamazon;

CREATE TABLE Products(
	id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INTEGER(10),
    PRIMARY KEY(id)
);

INSERT INTO Products(product_name, department_name, price, stock_quantity) VALUES('chocolate', 'candy', 1.99, 200);
INSERT INTO Products(product_name, department_name, price, stock_quantity) VALUES('milkshake', 'beverage', 8.98, 300);
INSERT INTO Products(product_name, department_name, price, stock_quantity) VALUES('pizza', 'food', 7.20, 400);
INSERT INTO Products(product_name, department_name, price, stock_quantity) VALUES('coca-cola', 'beverage', 4.00, 500);
INSERT INTO Products(product_name, department_name, price, stock_quantity) VALUES('cheeseburger', 'food', 10.19, 600);
INSERT INTO Products(product_name, department_name, price, stock_quantity) VALUES('starburst', 'candy', 8.77, 700);
INSERT INTO Products(product_name, department_name, price, stock_quantity) VALUES('blueberries', 'fruit', 19.19, 120);
INSERT INTO Products(product_name, department_name, price, stock_quantity) VALUES('burrito', 'food', 34.09, 230);
INSERT INTO Products(product_name, department_name, price, stock_quantity) VALUES('pepsi', 'beverage', 15.99, 440);
INSERT INTO Products(product_name, department_name, price, stock_quantity) VALUES('crush', 'beverage', 17.00, 760);

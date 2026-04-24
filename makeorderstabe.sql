CREATE DATABASE shipstationodbc;
USE shipstationodbc;
CREATE TABLE Orders(
    orderNumber VARCHAR(50) NOT NULL PRIMARY KEY,
    orderDate DATETIME NOT NULL,
    lastModifiedDate DATETIME,
    shipByDate DATETIME,
    orderstatus VARCHAR(50),
    amountPaid DECIMAL(9, 2),
    firstName VARCHAR(100) NOT NULL,
    lastName VARCHAR(100) NOT NULL,
    company VARCHAR(100),
    addressline1 VARCHAR(200) NOT NULL,
    addressline2 VARCHAR(200),
    city VARCHAR(100) NOT NULL,
    states VARCHAR(100) NOT NULL,
    postalcode VARCHAR(50) NOT NULL,
    country VARCHAR(2) NOT NULL,
    email VARCHAR(100),
    phone VARCHAR(50),
    customField1 VARCHAR(100),
    customField2 VARCHAR(100),
    customField3 VARCHAR(100),
    orderSource VARCHAR(50),
    shipMethod VARCHAR(100),
    customerNotes VARCHAR(1000),
    internalNotes VARCHAR(1000),
    productName VARCHAR(200),
    SKU VARCHAR(50),
    price DECIMAL(9, 2),
    quantity INT,
    totalWeight DECIMAL(9, 2),
    carrier VARCHAR(100),
    trackingNumber VARCHAR(50),
    shipDate DATETIME
);
INSERT INTO Orders (
        orderNumber,orderDate,orderStatus, firstName, lastName, addressline1, city, states, postalcode, country
    )
VALUES ("100", "2026-4-24","awaiting shipment", "john" ,"doe", "4301 Bull Creek Rd","austin","TX", "78731","US" );
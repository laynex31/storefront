import express from 'express';
import path from 'path';
import mysql from 'mysql2';
import  dotenv  from 'dotenv';
dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()


export async function getOrders() {
    const [rows] = await pool.query("SELECT * FROM orders")
    return rows
};

export async function getOrderNumber(orderNumber) {
    const [order] = await pool.query(`SELECT * FROM orders WHERE orderNumber = ?`, [orderNumber])
    return order
};


export async function createOrderharcoded() {
    const [result] = await pool.query(`INSERT INTO Orders (
        orderNumber, orderDate ,orderStatus, firstName, lastName, addressline1, city, states, postalcode, country, SKU, productName, price
    )
VALUES ("101", "2026-4-24","awaiting shipment", "john" ,"doe", "4301 Bull Creek Rd","austin","TX", "78731","US", "testproduct","testname","9.99" );`)
    return result
};
export async function createOrder(orderNumber, orderDate, orderStatus, firstName, lastName, addressline1, city, states, postalcode, country, SKU, productName, price) {
  const [result] = await pool.query(
    `INSERT INTO Orders ( 
      orderNumber, orderDate, orderStatus, firstName, lastName, 
      addressline1, city, states, postalcode, country, 
      SKU, productName, price 
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`,
    [orderNumber, orderDate, orderStatus, firstName, lastName, addressline1, city, states, postalcode, country, SKU, productName, price]
  );
  return result;
}

export async function createOrderForm({ orderNumber, orderDate, orderStatus, firstName, lastName, addressline1, city, states, postalcode, country, SKU, productName, price }) {
  console.log(this)
  const [result] = await pool.query(
    `INSERT INTO Orders ( 
      orderNumber, orderDate, orderStatus, firstName, lastName, 
      addressline1, city, states, postalcode, country, 
      SKU, productName, price 
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`,
    [orderNumber, orderDate, orderStatus, firstName, lastName, addressline1, city, states, postalcode, country, SKU, productName, price]
  );
  return result;
}

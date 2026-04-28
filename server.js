import express from 'express';
import path from 'path';
import { getOrders, createOrderharcoded, getOrderNumber } from './database.js';

const app = express();


app.get('/', async (req, res) => {
    const orders = await getOrders();
    res.send(orders)
}) 

app.get('/createorder', async (req, res) => {
    const newOrder = await createOrderharcoded();
    res.send(newOrder)
}) 

app.get(`/orders/:ordernumber`, async (req, res) => {
    const ordernumber = req.params.ordernumber
    const Order = await getOrderNumber(ordernumber);
    res.send(Order)
}) 



app.listen(8000, () => console.log(`server is running on port 8000`));


import express from 'express';
import path from 'path';
import { getOrders } from './database.js';

const app = express();


app.get('/', async (req, res) => {
    const orders = await getOrders();
    res.send(orders)
}) 

app.listen(8000, () => console.log(`server is running on port 8000`));


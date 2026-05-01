import express from 'express';
import path from 'path';
import fs from 'fs/promises';
import url from 'url';
import { getOrders, createOrderharcoded, getOrderNumber } from './database.js';
const app = express();
app.use(express.json());

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



app.get('/getorders', async (req, res) => {
    const orders = await getOrders();
    res.send(orders)
}) 

app.get('/', async (req, res) => {
  let filePath = path.join(__dirname, "app", "public", "index.html");
    const data = await fs.readFile(filePath);
    res.setHeader('content-type', 'text/html');
    res.write(data);
    res.end()
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

app.post('/createOrderForm', async (req, res) => {
    const data2 = req.body
    console.log(data2)
    res.sendStatus(200)
}) 



app.listen(8000, () => console.log(`server is running on port 8000`));


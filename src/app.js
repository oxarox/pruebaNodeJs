import express from "express";
import config from '../src/config.js';

import productsRoutes from '../src/routes/products.routes.js';

const app = express();

//settings
app.set('port', config.port);

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(productsRoutes);

export default app;
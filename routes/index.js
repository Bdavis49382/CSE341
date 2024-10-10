const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('../connection');
const contactsRouter = require('./contacts');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
const cors = require('cors');

app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

connectDB();

app.use(express.json());
app.use('/contacts', contactsRouter);

app.listen(process.env.PORT || 3000, () => {
    console.log('Server Started at port ' + (process.env.PORT || 3000))
})
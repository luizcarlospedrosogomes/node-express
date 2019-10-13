const express    = require('express');
const mongodb    = require('mongoose');
const requireDir = require('require-dir');
const cors       = require('cors');
//const swaggerSpec = swaggerJSDoc(options);
 
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
const app      = express();


app.use(express.json());
app.use(cors());
mongodb.connect('mongodb://admin:admin2018@ds233258.mlab.com:33258/express', {useNewUrlParser:true});

requireDir('./src/models');

app.use('/api', require('./src/routes'))
//app.listen(3001);
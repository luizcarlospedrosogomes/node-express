const express =  require('express');
const routes  = express.Router();

const ProductController = require('./controllers/ProductController');
const UserController    = require('./controllers/UserController');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./../swagger.json');

const auth    =  require('./middlewares/auth');

routes.use('/docs', swaggerUi.serve);
routes.get('/docs', swaggerUi.setup(swaggerDocument));
routes.get('/products', ProductController.index);
//with authentication
routes.use(auth);
routes.post('/products', ProductController.loja);
routes.get('/products/:id', ProductController.delathes);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.delete);


routes.post('/login', UserController.login);

module.exports =  routes;


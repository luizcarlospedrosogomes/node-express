//swaggerDef.js
module.exports = {
    info: {
    // API informations (required)
    title: 'API Documentation', // Title (required)
    version: '1.0.0', // Version (required)
    description: 'API documentation description', // Description (optional)
    host:'/api'
    },
    apis: ['./src/**/*.js'] //change this according to path where your code lies  
    };
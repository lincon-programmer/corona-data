const   swaggerUi = require("swagger-ui-express"),
        swaggerJsdoc = require("swagger-jsdoc");

const swaggerDefinition = {
    info: {
        title: 'API Corona Data',
        version: '0.0.5',
        description: 'Api de status do coronavírus no Brasil',
        contact:{
            name: 'Lincon Venicios',
            email: 'lincon@gadbi.com.br'
        }
    },
    host: 'corona-dataapp.herokuapp.com',
    basePath: '/',
    schemes:[
        'https'
    ],
    consumes: 'application/json',
    produces: 'application/json',
    tags: {
            name: 'Brasil',
    }
}

const options = {
    swaggerDefinition,
    apis: [
        '*/list-routers.js'
    ],
};

const specs = swaggerJsdoc(options);

module.exports = (api)=>{
    api.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));
}
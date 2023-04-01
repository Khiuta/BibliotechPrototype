const express = require('express')
const app = express();
const routes = require('./routes/routes')

//Config
    //Configurando Body Parser
    app.use(express.urlencoded({extended: false}));
    app.use(express.json());

app.use(routes);
app.listen(3000);
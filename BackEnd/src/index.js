const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use( express.json() );

app.use( routes );

app.listen( 3333 );






/**
*
*   Método HTTP:
*
*   GET: Buscar/Listar uma informação do back-end
*   POST: Criar uma informação no back-end
*   PUT: Alterar uma informação no back-end
*   DELETE: Deletar uma informação do back-end
*
**/

/**
*
*   Tipos de Paramêtros:
*
*   Query Paramns: Paramêtros nomeados enviados na rota após "?" (Filtros,Páginação).
*   Route Paramns: Paramêtros utilizado para identificar recursos.
*   Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.
*
**/

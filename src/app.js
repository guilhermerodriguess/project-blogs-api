const express = require('express');
const routes = require('./routes');
const validateToken = require('./middleware/validateJWT');
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

// ...

const apiRoutes = express.Router();

apiRoutes.post('/user', routes.createUser);
apiRoutes.post('/login', routes.login);
apiRoutes.get('/user', validateToken, routes.getUsers);
apiRoutes.get('/user/:id', validateToken, routes.getByUserId);
apiRoutes.post('/categories', validateToken, routes.createCategory);
apiRoutes.get('/categories', validateToken, routes.getCategories);
apiRoutes.post('/post', validateToken, routes.post);

app.use(apiRoutes);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;

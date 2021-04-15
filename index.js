const express = require('express');
const { routeProduct } = require('./src/routes');

const app = express();

app.use(express.json());

const PORT = 3000;
const SUCCESS = 200;

app.use(routeProduct);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.listen(PORT, () => {
  console.log('Online!');
});

import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  res.json({
    aluno: 'Gustavo',
    curso: 'ADS',
  });
});

export default routes;

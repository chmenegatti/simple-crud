import { Router } from 'express';

import usersRoutes from '@domains/Users/routes/users.routes';

const routes = Router();

routes.use('/users', usersRoutes);

export default routes;

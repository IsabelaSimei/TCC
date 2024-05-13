import { Router } from 'express';

import UsersContactsController from '@modules/users/infra/controllers/UsersContactsController';

const usersRouter = Router();

const usersController = new UsersContactsController();

usersRouter.get('/:id', usersController.show);

export default usersRouter;

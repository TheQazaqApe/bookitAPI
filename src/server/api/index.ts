import { Router } from 'express';
import usersRouter from './users';

const router = Router();

router.use('/users', usersRouter);
// router.use('/clients', clientsRouter);

export default router


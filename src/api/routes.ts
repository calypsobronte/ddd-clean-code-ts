import { Router } from 'express';
import { UsersRoutes } from './v1/v1.routes';

const router = Router();

router.use('/users', UsersRoutes);


export default router;
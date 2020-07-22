import { Router } from 'express';
import { SignInHandler } from './controller';

const router = Router();

router
    .route('/signIn')
    .post(SignInHandler)

export default router;
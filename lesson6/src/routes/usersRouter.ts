import { Router } from 'express';
import { usersController } from '../controllers/usersController';

const router = Router();

router.get('/', usersController.getUsers);
router.post('/', usersController.createUsers);
router.patch('/:id', usersController.changeUsers);
router.delete('/:id', usersController.deleteUsers);
router.get('/:email', usersController.getUserByEmail);

export const usersRouter = router;

import { Router } from 'express';
import { ListAllUsersController } from '../controllers/UserController';
import { ListSystemsController, CreateSystemController, AlterSystemController } from '../controllers/SystemController';

const router = Router();

const searchUsers = new ListAllUsersController();
const searchSystems = new ListSystemsController();
const createSystem = new CreateSystemController();
const alterSystem = new AlterSystemController();

router.get('/users', searchUsers.handle)
router.get('/systems', searchSystems.handle)
router.post('/system', createSystem.handle)
router.put('/systems/:id', alterSystem.handle)

export { router };
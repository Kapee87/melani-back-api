import express from 'express'
import userController from '../controllers/user.controller.js'
import isSuperAdmin from '../middlewares/auth/isSuperAdmin.middleware.js'
import accountExistsDelete from '../middlewares/accountExistsDelete.middleware.js';

import passport from '../middlewares/passport.js'
import isAdmin from '../middlewares/isAdmin.middleware.js';

const router = express.Router();

const { getUsers, getUserById, createUser, updateUser, deleteUser } = userController

router.get('/', getUsers);

router.get('/:id', getUserById);

router.post('/', isSuperAdmin, createUser);

router.delete('/:id', isSuperAdmin, accountExistsDelete, deleteUser);

router.put('/:id', passport.authenticate('jwt', { session: false }), isAdmin, updateUser);


export default router
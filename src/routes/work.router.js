import express from 'express'
import workController from '../controllers/work.controller.js'
import isUserOnline from '../middlewares/auth/isUserOnline.middleware.js'
import passport from '../middlewares/passport.js'
import isAdmin from '../middlewares/isAdmin.middleware.js';

const router = express.Router();

const { getWorks, getWorkById, createWork, updateWork, deleteWork } = workController

router.get('/', getWorks);

router.get('/:id', getWorkById);

router.post('/', passport.authenticate('jwt', { session: false }), isUserOnline, isAdmin, createWork);

router.delete('/:id', passport.authenticate('jwt', { session: false }), isAdmin, deleteWork);

router.put('/:id', passport.authenticate('jwt', { session: false }), isUserOnline, isAdmin, updateWork);


export default router
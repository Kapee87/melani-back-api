import express from 'express'
import ExpoController from '../controllers/expo.controller.js'
import isUserOnline from '../middlewares/auth/isUserOnline.middleware.js'
import passport from '../middlewares/passport.js'
import isAdmin from '../middlewares/isAdmin.middleware.js';

const router = express.Router();

const { getExpos, getExpoById, createExpo, updateExpo, deleteExpo } = ExpoController

router.get('/', getExpos);

router.get('/:id', getExpoById);

router.post('/', passport.authenticate('jwt', { session: false }), isUserOnline, isAdmin, createExpo);

// router.delete('/:id', isAdmin, deleteExpo);

router.put('/:id', passport.authenticate('jwt', { session: false }), isUserOnline, isAdmin, updateExpo);


export default router
import express from 'express'
import authController from '../controllers/auth.controller.js'
import { validator } from '../middlewares/validator.js';
import accountExistsSignIn from '../middlewares/auth/accountExistsSignIn.middleware.js';
import passwordIsOk from '../middlewares/auth/passwordIsOk.middleware.js';
import { validateSignInUser } from '../schema/user.schema.js';
import passport from '../middlewares/passport.js'
import isUserOnline from '../middlewares/auth/isUserOnline.middleware.js';

const router = express.Router();

const { signin, signout, token } = authController

// router.post('/signup',
//     validator(validateSignUpUser),
//     signup);

router.post('/signin',
    validator(validateSignInUser),
    accountExistsSignIn,
    passwordIsOk,
    signin);

router.post('/signout', passport.authenticate('jwt', { session: false }), signout)

router.post('/token', passport.authenticate('jwt', { session: false }), isUserOnline, token)


// router.post('/prueba', passport.authenticate('jwt', { session: false }), pruebaPassport)



export default router
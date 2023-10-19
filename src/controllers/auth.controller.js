
import bcryptjs from 'bcryptjs'
import User from '../model/User.js'
import jwt from 'jsonwebtoken'
// import { verify } from '../helpers/google-verify.js'

const controller = {

    signup: async (req, res, next) => {
        req.body.role = req.body.role || 'user'

        try {
            req.body.password = bcryptjs.hashSync(req.body.password, 10)

            await User.create(req.body)

            return res.status(201).json({
                succes: true,
                message: 'User Registered!'
            })
        } catch (error) {
            return next(error)
        }
    },
    signin: async (req, res, next) => {
        // console.log('controller signin')

        try {
            let user = await User.findOneAndUpdate(
                { email: req.user.email },
                { online: true },
                { new: true }
            )

            const token = jwt.sign(
                {
                    id: user._id,
                    email: user.email,
                    name: user.name,
                    profileImage: user.profileImage
                },
                process.env.SECRET,
                { expiresIn: '1h' }
            )
            user.password = null //prevenimos devolver el pass por accidente

            return res.status(200).json({
                succes: true,
                message: 'User logged correctly',
                response: {
                    token,
                    user: {
                        name: user.name,
                        email: user.email,
                        profileImage: user.profileImage
                    }
                }
            })
        } catch (error) {
            next(error)
        }
    },
    signout: async (req, res, next) => {

        try {
            await User.findOneAndUpdate(
                { email: req.user.email },
                { online: false },
                { new: true }
            )
            return res.status(200).json({
                succes: true,
                message: 'User signed out'
            })
        } catch (error) {
            next(error)
        }
    },
    signout: async (req, res, next) => {

        try {
            await User.findOneAndUpdate(
                { email: req.user.email },
                { online: false },
                { new: true }
            )
            return res.status(200).json({
                succes: true,
                message: 'User signed out'
            })
        } catch (error) {
            next(error)
        }
    },
    token: async (req, res, next) => {
        const { user } = req
        
        try {
            return res.status(200).json({
                user: {
                    name: user.name,
                    email: user.email,
                    profileImage: user.profileImage
                },
            })
        } catch (error) {
            console.log(error);
            // next(error)
        }
    },
    pruebaPassport: async (req, res, next) => {
        try {
            const {user}= req
            return res.status(200).json({
                user
            })
        } catch (error) {
            next(error)
        }
    }
}

export default controller
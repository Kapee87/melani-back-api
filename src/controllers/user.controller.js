import User from '../model/User.js'
import bcryptjs from 'bcryptjs'

const controller = {
    getUsers: async (req, res, next) => {

        try {
            const getUsers = await User.find()
            console.log(getUsers);
            if (getUsers.length > 0) {
                return res.status(200).json({
                    success: true,
                    Users: getUsers
                })
            }
            return res.status(404).json({
                success: false,
                message: 'Users not found'
            })

        } catch (error) {
            return next(error)
        }
    },
    getUserById: async (req, res, next) => {

        try {
            const getUserById = await User.findById(req.params.id)
            return res.status(200).json({
                success: true,
                User: getUserById
            })
        } catch (error) {
            return next(error)
        }
    },
    createUser: async (req, res, next) => {
        console.log(req.body);
        try {
            req.body.password = bcryptjs.hashSync(req.body.password, 10)
            const newUser = await User.create(req.body)
            return res.status(201).json({
                success: true,
                message: 'User created'
            })
        } catch (error) {
            return next(error)
        }
    },
    deleteUser: async (req, res, next) => {
        try {
            const deleteUser = await User.findByIdAndDelete(req.params.id)
            return res.status(200).json({
                success: true,
                message: 'User deleted',
                deleteUser: deleteUser
            })
        } catch (error) {
            return next(error)
        }
    },
    updateUser: async (req, res, next) => {
        try {
            req.body.password = bcryptjs.hashSync(req.body.password, 10)
            const updateUserArray = await User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
            return res.status(200).json({
                success: true,
                message: 'User updated',
                updateUserArray,
                oldData: req.body
            })
        } catch (error) {
            return next(error)
        }
    }
}

export default controller;
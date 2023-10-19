import Expo from '../model/Expo.js'

const controller = {
    getExpos: async (req, res) => {

        try {
            const getExpos = await Expo.find()
            console.log(getExpos);
            if (getExpos.length > 0) {
                return res.status(200).json({
                    success: true,
                    getExpos
                })
            }
            return res.status(404).json({
                success: false,
                message: 'Expos not found'
            })

        } catch (error) {
            return next(error)
        }
    },
    getExpoById: async (req, res) => {

        try {
            const getExpoById = await Expo.findById(req.params.id)
            return res.status(200).json({
                success: true,
                Expo: getExpoById
            })
        } catch (error) {
            return next(error)
        }
    },
    createExpo: async (req, res) => {
        console.log(req.body);
        try {
            const newExpo = await Expo.create(req.body)
            return res.status(201).json({
                success: true,
                message: 'Expo created'
            })
        } catch (error) {
            return next(error)
        }
    },
    deleteExpo: async (req, res) => {
        try {
            const deleteExpo = await Expo.findByIdAndDelete(req.params.id)
            return res.status(200).json({
                success: true,
                message: 'Expo deleted'
            })
        } catch (error) {
            returnnext(error)
        }
    },
    updateExpo: async (req, res) => {
        try {
            const updateExpoArray = await Expo.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
            return res.status(200).json({
                success: true,
                message: 'Expo updated',
                updateExpoArray,
                oldData: req.body
            })
        } catch (error) {
            return next(error)
        }
    }
}

export default controller;
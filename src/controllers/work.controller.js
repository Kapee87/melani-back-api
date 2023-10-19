import Work from '../model/Work.js'

const controller = {
    getWorks: async (req, res) => {

        try {
            const getWorks = await Work.find()
            console.log(getWorks);
            if (getWorks.length > 0) {
                return res.status(200).json({
                    success: true,
                    getWorks
                })
            }
            return res.status(404).json({
                success: false,
                message: 'Works not found'
            })

        } catch (error) {
            return next(error)
        }
    },
    getWorkById: async (req, res) => {

        try {
            const getWorkById = await Work.findById(req.params.id)
            return res.status(200).json({
                success: true,
                Work: getWorkById
            })
        } catch (error) {
            return next(error)
        }
    },
    createWork: async (req, res) => {
        console.log(req.body);
        try {
            const newWork = await Work.create(req.body)
            return res.status(201).json({
                success: true,
                message: 'Work created'
            })
        } catch (error) {
            return next(error)
        }
    },
    deleteWork: async (req, res) => {
        try {
            const deleteWork = await Work.findByIdAndDelete(req.params.id)
            return res.status(200).json({
                success: true,
                message: 'Work deleted'
            })
        } catch (error) {
            returnnext(error)
        }
    },
    updateWork: async (req, res) => {
        try {
            const updateWorkArray = await Work.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
            return res.status(200).json({
                success: true,
                message: 'Work updated',
                updateWorkArray,
                oldData: req.body
            })
        } catch (error) {
            return next(error)
        }
    }
}

export default controller;
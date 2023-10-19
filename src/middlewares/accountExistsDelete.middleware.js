import User from "../model/User.js"

const accountExistsDelete = async (req, res, next) => {
    try {
        const user = await User.findOne({ _id: req.params.id })
        console.log('exists middleware', user);
        if (user) {
            return next()
        } else {
            return res.status(404).send('No se encuentra un usuario con ese Id')
        }
    } catch (error) {
        next(error)
    }

}

export default accountExistsDelete;
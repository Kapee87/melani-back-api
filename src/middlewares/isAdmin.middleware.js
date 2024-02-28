import User from "../model/User.js"

const isAdmin = async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id)
        console.log(user, req.user);
        if (user.role == 'admin') {
            return next()
        }
        return res.status(401).json({
            success: false,
            message: 'Unauthorized user for request'
        })

    } catch (error) {
        next(error)
    }
}

export default isAdmin
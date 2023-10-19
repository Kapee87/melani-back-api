
const isUserOnline = (req, res, next) => {
    try {
        const { user } = req
        console.log(user);
        if (user.online) {
            return next()
        } else {
            res.status(401).json({
                messsage: 'La sesión no fué iniciada o expiró'
            })
        }
    } catch (error) {
        next(error)
    }

}

export default isUserOnline

const isUserOnline = (req, res, next) => {
    console.log('isUser ', req.body);
    try {
        const { user } = req
        // console.log(user);
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
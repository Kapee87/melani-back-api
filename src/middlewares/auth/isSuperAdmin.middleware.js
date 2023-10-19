
const isSuperAdmin = (req, res, next) => {
    try {
        console.log(req.body.superKey == process.env.SUPER_KEY);
        if (req.body.superKey == process.env.SUPER_KEY) {
            return next()
        } else {
            res.status(401).json({
                messsage: 'Credenciales incorrectas'
            })
        }
    } catch (error) {
        next(error)
    }

}

export default isSuperAdmin
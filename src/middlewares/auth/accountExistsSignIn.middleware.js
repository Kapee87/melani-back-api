import User from "../../model/User.js"

const accountExistsSignIn = async (req, res, next) => {
    // console.log('account in ');
    try {
        // console.log(req.body);
        const user = await User.findOne({ email: req.body.email })

        // console.log('exists middleware', user);
        if (user) {
            req.user = {
                id: user._id,
                email: user.email,
                name: user.name,
                password: user.password,
                profileImage: user.profileImage,
                online: user.online,
                info: user.info,
                role: user.role
            }
            return next()
        }else{
            return res.status(404).send('No se encuentra el usuario, las credenciales podrían ser incorrectas. Revíselas y vuelva a intentar')
        }
    } catch (error) {
        next(error)
    }

}

export default accountExistsSignIn;
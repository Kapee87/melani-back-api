import express from "express";
import worksRouter from './work.router.js'
import exposRouter from './expo.router.js'
import userRouter from './user.router.js'
import authRouter from './auth.router.js'


const router = express.Router()


router.use('/works', worksRouter)

router.use('/expos', exposRouter)

router.use('/user', userRouter)

router.use('/auth', authRouter)

router.get('/', (req, res) => {
    res.send(
        `
        <body style='min-width:100%; margin: 0;'>
        <h1 
        style='
        background-color:#53EBC8; text-align: center;text-shadow: aliceblue 1px 1px 1px; padding:1rem; box-shadow: black 1px 1px 3px;
        ' >Api para el portfolio de Mélani Vera</h1>
           <div style='display:flex;flex-direction:column; align-items:stretch; justify-content:space-between; background-color: #5555f25b; height: fit-content; min-height: 82vh; padding-top:4rem; margin-top:-1.3rem;'>
           <p
           style='
           background-color:#00111F;color:aliceblue; padding:3rem; font-size:2rem; width:50%; margin: 0 auto; border-radius:2rem; text-align:center;
           ' >Aquí se realizan las consultas y la persistencia de datos</p>
           <nav>
           <ul style='display:flex; justify-content:space-around; list-style-type: none;'>
           <li style='background-color:indigo; padding:1rem; border-radius:2rem;'onmouseover="this.style.color='red';">
           <a href='/api/users' style='text-decoration: none; color:silver; font-weight:bold'>Ir a User endpoint</a>
           </li>
           <li style='background-color:indigo; padding:1rem; border-radius:2rem;'>
           <a href='/api/works' style='text-decoration: none; color:silver; font-weight:bold'>Ir a Works endpoint</a>
           </li>
           <li style='background-color:indigo; padding:1rem; border-radius:2rem;'>
           <a href='/api/expos' style='text-decoration: none; color:silver; font-weight:bold'>Ir a Expos endpoint</a>
           </li>
           </ul>
           </nav>
           </div>
        </body>
        `
    )
})


export default router;
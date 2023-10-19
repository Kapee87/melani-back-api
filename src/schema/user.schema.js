import joi from 'joi'

export const validateSignInUser = joi.object({
    email: joi.string()
        .required()
        .email({
            minDomainSegments: 2
        })
        .messages({
            'any.required': 'El mail es requerido'
        }),
    password: joi.string()
        .required()
        .min(6)
        .max(35)
        .alphanum()
})

export const validateSignUpUser = joi.object({
    key: joi.string()
        .required()
        .min(4)
        .max(10)
        .alphanum()
})

// export const validateSignUpUser = joi.object({
//     // _id: joi.any(),
//     email: joi.string()
//         .required()
//         .email({
//             minDomainSegments: 2
//         })
//         .messages({
//             'any.required': 'El mail es requerido'
//         }),
//     password: joi.string()
//         .required()
//         .min(8)
//         .max(35)
//         .alphanum(),
//     //.regex() para especificar más puntualmente
//     name: joi.string()
//         .min(2)
//         .max(50),
//     info: joi.string()
//         .min(2)
//         .max(500),
//     //.regex() solo caracteres alfanumericos
//     profileImage: joi.string()
//         .required()
//         .uri(),
// })

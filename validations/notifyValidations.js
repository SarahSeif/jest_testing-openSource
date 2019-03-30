const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            notify_number: Joi.number().required(),
            User_id: Joi.number().required(),
            MSG: Joi.string().min(3).required()
           
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            notify_number: Joi.number().required(),
            User_id: Joi.number().required(),
            MSG: Joi.string().min(3).required()
           
            
        }

        return Joi.validate(request, updateSchema)
    }, 
}
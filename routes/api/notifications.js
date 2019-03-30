const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Book = require('../../models/Notification')
const validator = require('../../validations/notifyValidations')

router.get('/', async (req,res) => {
    const Notifications = await Book.find()
    res.json({data: Notifications})
})

router.get('/:User_id', async (req,res) => {
    const User_id = req.params.User_id
    const Notifications = await Book.find({User_id})
    res.json({data: Notifications})
})


router.post('/', async (req,res) => {
    try {
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const newBook = await Book.create(req.body)
     res.json({msg:'notification was created successfully', data: newBook})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })


 module.exports = router;

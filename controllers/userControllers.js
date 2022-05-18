const UserSchema = require('../models/userSchema');
const mongoose = require('mongoose');

const bcrypt = require('bcrypt');


const getAll = async (req , res) => {
    try { 

    const users = await userSchema.find();
    res.status(200).send(users);
    
 }catch(err) {
    res.status(500).send({
        'message': err
    })
 }

};


const createUser = async (req , res) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, 10)
    req.body.password = hashedPassword

    try {
        const newUser = new UserSchema(req.body)

        const savedUser = await newUser.save()

        res.status(200).json({
            message: 'User adicionado com sucesso!',
            savedUser
        })
    }catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

module.exports = {
    createUser,
    getAll
}
const { response, request } = require('express');
const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const salt = 10;


const usersGet = async (req = request, res = response) => {
    const users = await User.find();
    res.status(200).json({
        message: "datos cargados correctamente",
        data: users
    });

}

const usersPost = async (req = request, res = response) => {
    const body = req.body;
    let user = User(body);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();

    res.status(200).json({
        message:"datos agregados correctamente",
        data: body
    });
}

const usersPut = async (req = request, res = response) => {
    const { id } = req.query;
    const userToEdit = req.body;

    const updateUser = await User.findByIdAndUpdate(id, userToEdit, { new: true });

    res.status(200).json({
        message: "user actualizado",
        data: updateUser
    });
}

const usersDelete = async (req = request, res = response) => {
    const { id } = req.query;
    await User.findByIdAndDelete(id);
    res.status(200).json({
        message: "usuario eliminado correctamente",
        data: id
    });

}


const loginPost = async (req = request, res = response) => {
    const body = req.body;
    const userInformationDb = await User.findOne({email: body.email, active: true});
    if (userInformationDb == null) {
        res.status(400).json({
            message:"user no fond",
            data: "null"
        });
    }

    const comparePassword = await bcrypt.compare(body.password, userInformationDb.password);

    if (comparePassword == false) {
        res.status(400).json({
            message:"invalid pasword",
            data: "null"
        });
    }


    const payload = {
        full_name: `${userInformationDb.name} ${userInformationDb.last_name}`,
        email: userInformationDb.email
    };


    res.status(200).json({
        message:"login succes",
        data: jwt.sign(payload, process.env.JWT_SIGNATURE)
    });
}


module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersDelete,
    loginPost
}
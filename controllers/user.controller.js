const { response, request } = require('express');
const User = require('../models/user.model');



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


module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersDelete 
}
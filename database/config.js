const mongoose = require('mongoose');


const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB);
        console.log ("coneccion a base de datos realizada con exito");
    } catch (error) {
        console.log (error);
        throw new Error("base de datos NO CONECTADA");
    }
}


module.exports = {
    dbConnection
}
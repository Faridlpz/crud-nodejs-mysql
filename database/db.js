const mysql = require("mysql");

const conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "sincara12345",
    database: 'crud_nodejs_db'
})

conexion.connect((err)=>{
    if(err) 
    {
        throw err;
    }
    console.log("Conexion exitosa!");
    
})

module.exports = conexion;
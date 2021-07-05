const express = require("express");
const router = express.Router();
const conexion = require('./database/db');

//MOSTRAR todos los registros
router.get('/',(req,res)=>{
    conexion.query('SELECT * fROM users', (error,results)=>{
    if(error)
     {
       throw error;
     }
    else{

         res.render('index',{results:results});
    }
    })
});

//RUTA PARA CREAR REGISTROS
router.get('/create',(req,res)=>{
    res.render('create');
})
//RUTA PARA EDITAR LOS REGISTROS
router.get('/edit/:id',(req,res)=>{
  const id = req.params.id;
  conexion.query('SELECT * FROM users where id=?',[id],(err,results)=>{
    if(err){
      throw err;
    }else{
      res.render('edit',{user:results[0]});
    }
  })
})

//RUTA PARA ELIMINAR REGISTROS
router.get('/delete/:id',(req,res)=>{
  const id =req.params.id;
  conexion.query('DELETE from users where id = ?',[id],(err,results)=>{
    if(err){
      throw err;
    }else{
      res.redirect('/');
    }
  })
})



const crud = require('./controllers/crud');
router.post('/save',crud.save)
router.post('/update',crud.update)




module.exports = router;
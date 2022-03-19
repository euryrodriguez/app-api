const db = require('../models');
const { request, response } = require('express');

class UsersController{
    async findAll(){
        const User = db.usuarios;
        return await User.find({});
    }
    async create(req = request, res = response){
        const User = db.usuarios;
        if(this.validateBody(req.body)){
           let newDocument = { 
               email:req.body.email, 
               firstName: req.body.firstName, 
               lastName: req.body.lastName, 
               password: req.body.password,
               createdDate: new Date()
            }
            if(req.body.role){
                newDocument['role'] = req.body.role;
            }
            const newUser = new User(newDocument);
            
            return newUser.save().then(function(response){
                if(response){
                    return { success: true, data: response, message: "Usuario creado exitosamente!" }
                }else{
                    return { success: false, data: null, message: "Este usuario ya esta registrado." }
                }
            }).catch(function(err){
                return { success: false, data: null, message: "Este usuario ya esta registrado." }
            });
            
        }else{
            return { status: 400, message: 'Bad request.' }
        }
    }
    async update(req = request, res = response){
        const User = db.usuarios;
        const id = req.params.id;
        if(this.validateBody(req.body) && id){
           let body = { 
               email:req.body.email, 
               firstName: req.body.firstName, 
               lastName: req.body.lastName, 
               password: req.body.password
            }
            if(req.body.role){
                body['role'] = req.body.role;
            }
            let response = await User.findByIdAndUpdate(id, body);
            if(response){
                return { success: true, data: response, message: "Usuario actualizado exitosamente!" }
            }else{
                return { success: false, data: null, message: "El usuario no existe." }
            }
        }else{
            return { status: 400, message: 'Bad Request.' }
        }
    }
    validateBody(requestBody){
        let isValid = false;
        let { email, firstName, lastName, password} = requestBody;
        if(email && firstName && lastName && password){
           if(this.validateEmail(email)){
            isValid = true;
           }
        }
        return isValid;
    }
    validateEmail(email) {
        return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email));
    };
}
module.exports = new UsersController();
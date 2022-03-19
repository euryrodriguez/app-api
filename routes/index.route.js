const express = require('express');
const router = express.Router();
const userController = require('../controllers/users.controllers');

router.get('/', async function(req, res){
    res.json(await userController.findAll());
});

router.post('/api/v1/user', async function(req, res){
    res.json( await userController.create(req, res));
});

router.put('/api/v1/user/:id', async function(req, res){
    res.json(await userController.update(req, res));
})

module.exports = router;
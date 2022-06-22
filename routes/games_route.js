const express = require("express");
const router = express.Router();
const controller = require("../controllers/games/games_controller");
const User = require("../models/app_models/User");

router.get("/games", async (req, res) => {
    let response = await controller.findAll();
    res.json(response);
});

router.get("/games/:id",async(req,res)=>{

    const id = req.params.id;

    let game;

    if(isNaN(id)){
        res.statusCode = 400;
        res.send("Nao numerico: " + id + ". Status Code: " + res.statusCode);
    }


    

    var response = await controller.findById(id);

    if(response == undefined){
        res.send("Jogo inexistente");
    }

    res.send(response);
    




});

router.post("/games/", async (req,res)=>{
    let {nome,ano,preco} = req.body; 
    console.log(nome);

    if(nome == undefined || preco == undefined){
        res.sendStatus(400);
        return;
    }

    var user = new User(nome,ano,preco);

    try{
        await controller.addNewGame(user);
        res.sendStatus(200);
    }catch(e){
        res.send(e);
    }

});

router.delete("/games/:id",async(req,res)=>{
    let id = req.params.id;

    if(isNaN(id)){
        res.send("Not a Number");
    }

    try{
    await controller.deleteById(id);
    res.send("Sucess");
    }catch(e){
        res.send(e);
    }
});


module.exports = router;
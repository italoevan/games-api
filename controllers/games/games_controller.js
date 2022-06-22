const model = require("../../models/sequelize/game_model");
const User = require('../../models/app_models/User');

async function findById(id) {

    var response = await model.findAll({
        where: {
            id: id
        }
    });
    console.log(response[0]);
    return response[0];

}

async function findAll() {
    var response = await model.findAll();
    return { "games": response };
}

async function deleteById(id) {

    try {
        await model.destroy({ where: { id: id } });
    } catch (e) {
        throw(e);
    }
}

async function addNewGame(user){

    if( user instanceof User){
        await model.create(user);
    }else{
        throw "Error";
    }
}

module.exports = {
    findById,
    findAll,
    deleteById,
    addNewGame
};
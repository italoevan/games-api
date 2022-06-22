
const { Sequelize, DataTypes } = require('sequelize');
const db = require('../../services/db');

const Games = db.define('games',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false

        },
        ano: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        preco: {
            type: DataTypes.DOUBLE,
            allowNull: true
        }

    }, {
    timestamps: false,

    // If don't want createdAt
    createdAt: false,

    // If don't want updatedAt
    updatedAt: false,
}
);

module.exports = Games;
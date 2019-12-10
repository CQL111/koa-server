const Sequelize =require('sequelize');
const sequelize = require('../sequelize1')

const articles = sequelize.define(
    'airticles',
    {
        id:{
            type :Sequelize.STRING(11),
            primaryKey:true
        },
        postId:Sequelize.STRING(11),
        date:Sequelize.BIGINT(100),

    },
    {
        timestamps:false
    }
)
module.exports = articles;
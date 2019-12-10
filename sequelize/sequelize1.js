const Sequelize = require('sequelize')
/**
 * npm install --save sequelize  --registry=https://registry.npm.taobao.org
 * npm install mysql
 * npm install mysql2
 * 
 * 配置数据库；
 * 数据库名称，
 * 数据库用户名；
 * 数据库密码
 * 数据库的详细配置
 * 
 */
const sequelize =new Sequelize('database','username','password',{
    host:'localhost',
    dialect:'mysql',
    operatorsAliases:false,
    dialectOptions:{
        charset:'',
        collate:'',
        supportBigNumbers:true,
        bigNumberStrings:true
    },
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    },
    timezone:'+08:00'

});
sequelize.authenticate().then(()=>{
    console.log('success')
}).catch(err=>{
    console.log(err);
})

module.exports = sequelize;
// const model = sequelize.define('modelName',{
//     columnA:{

//     },

// })



const Sequelize = require('sequelize');
const articles = require('../models/articles')


const getArticles = async ctx =>{
    let pageSize = '';
    let pageNum = '';
    let total = 0;
    await articles.findAll().then(data=>{
        total = data.length
    })

    await articles.findAll({attributes:['postId','date','tags','title'],order:['date']}).then(data=>{
        let list =[];
        if(ctx.request.query.pageSize){
            pageSize = parseInt(ctx.request.query.pageSize);
            pageNum = parseInt (ctx.request.query.pageNum);
            list = data.reverse().slice(pageSize*(pageNum -1),pageSize+pageSize*(pageNum-1))
            ctx.body = {
                msg:'查询成功',
                datalist:list
            }
        }
    })
}
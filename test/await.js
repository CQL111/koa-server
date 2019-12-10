// async function 摇色子(){
//     return new Promise((resolve, reject)=>{
//         let sino = parseInt(Math.random() * 6 +1)
//         setTimeout(()=>{
//             resolve(sino)
//         },3000)
//     })
// }
// async function test(){
//     let n = await  摇色子()
//     console.log(1)
//     console.log(n)
// }
// test()
// console.log(122)
// // function f1() {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(function () {
//             resolve("hello word")
//         })
//     })
//     return promise;
// } 
// console.log(f1().then(res=>{
//     console.log(res)
// }))

// console.log(1)

// js执行机制 同步和异步
// 为避免操作过多的节点，单线程，从而任务需要排队，前一个任务结束才能执行下一个任务，  但为了避免前一个任务执行时间过长了，产生了两种任务，一种异步任务，一种同步任务，

// 当所有同步任务未执行玩的时候 ，异步是不会执行的，



// async function add(x,y){
//     return x+y
// }
//相当于
// function add(x,y){
//     return new Promise((resolve,rejects)=>{
//         resolve(x+y)
//     })
// }
// var promise1 = add(1,2)
// console.log(promise1)
// async function add1(x,y){
//     let a = await add(x,y)
//     console.log('内部'+a)
//     return a
// }
// add1(1,2)
// add1(1,2).then(res=>{
//     console.log('调用'+res)
// })
var fs = require('fs');

var ws1 = fs.createWriteStream('../output1.txt', 'utf-8');
ws1.write('使用Stream写入文本数据...\n');
ws1.write('END.');
ws1.end();

var ws2 = fs.createWriteStream('output2.txt');
ws2.write( Buffer.from('使用Stream写入二进制数据...\n','utf-8'))
ws2.write( Buffer.from('END.', 'utf-8'));
ws2.end();
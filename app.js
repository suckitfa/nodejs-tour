// // /*
// //  * @Author: GuangyuanTang 254202042@qq.com
// //  * @Date: 2024-01-29 13:17:15
// //  * @LastEditors: GuangyuanTang 254202042@qq.com
// //  * @LastEditTime: 2024-01-29 14:01:38
// //  * @FilePath: \nodejs-tour\app.js
// //  * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
// //  */
// // // console.log('hello world')

// // // const {readFile} = require('fs')

// // // console.log('started a first task.')

// // // readFile('./content/test.txt','utf8',(err,result) => {
// // //     if (err) {
// // //         console.log(err)
// // //         return
// // //     }
// // //     console.log(result)
// // //     console.log("computed the first task")
// // // })

// // // console.log('starting next task')

// // const http = require('http')
// // const {readFile, writeFile} = require('fs')
// // const util = require('util')
// // const readFilePromise = util.promisify(readFile)
// // const writeFilePromise = util.promisify(writeFile)
// // // const getText = (path) => {
// // //     return new Promise((resolve,reject) => {
// // //         readFile(path,'utf8',(err,result) => {
// // //             if(err) {
// // //                 console.log('err =  ',err)
// // //                 reject(err)
// // //                 return
// // //             } else {
// // //                 resolve(result)
// // //             }
// // //         })
// // //     })
// // // }

// // // getText('./content/test.txt')
// // //     .then((result) => {
// // //         console.log(result)
// // //     })
// // //     .catch(console.log)

// // // const start = async () => {
// // //     try {
// // //         const first = await readFilePromise('./content/test.txt','utf8')
// // //         const sec = await readFilePromise('./content/result-async.txt','utf8')
// // //         console.log('first = ',first,'sec = ',sec)
// // //         await writeFilePromise('./content/result-async.txt','helloadslfjksdf\n',{flag:'a'})
// // //     } catch(err) {
// // //         console.log(err)
// // //     }
// // //     // const second = await readFile('./content/test.txt','utf8')
// // // }

// // start()

// // const server = http.createServer((req,res) => {
// //     if (req.url === '/') {
// //         res.end('Home Page')
// //     }

// //     if (req.url === '/about') {
// //         // blocking code
// //         // for(let i = 0; i < 1000; i++) {
// //         //     for(let j = 0; j < 10000; j++) {
// //         //         console.log(`${i}${j}`)
// //         //     }
// //         // }
// //         res.end('hello aoubt')
// //     }
// // })

// // server.listen(5000,() => {
// //     console.log(`http://localhost:5000`)
// // })

// const EventEmitter = require('events')

// const customEmitter = new EventEmitter()

// // on order matters!!!
// customEmitter.on('event1',() => {
//     console.log('event1')
// })

// customEmitter.on('event1', () => {
//     console.log('event1 rescisdlfjksaldjfxx')
// })

// customEmitter.emit('event1')


// streams
// const streams = require('stream')

// const {writeFileSync} = require('fs')

// for(let i = 0; i < 100000 ; i++) {
//     writeFileSync('./content/big.txt',`hello world! ${i}\n`, {flag:'a'})
// }


// const {createReadStream} = require('fs')

// const stream = createReadStream('./content/big.txt',{highWaterMark: 90000,encoding:'utf8'})

// stream.on('data', (result) => {
//     console.log(result)
// })

// stream.on('error' ,() => {
//     console.log('error')
// })

const http = require('http')
const fs = require('fs')

http.createServer((req,res) => {
    const fileStream = fs.createReadStream('./content/big.txt','utf8')
    fileStream.on('open' , (file) => {
        fileStream.pipe(res)
    })

    fileStream.on('error', (err) => {
        res.end(err)
    })
}).listen(5000)
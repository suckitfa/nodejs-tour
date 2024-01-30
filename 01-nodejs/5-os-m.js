/*
 * @Author: GuangyuanTang 254202042@qq.com
 * @Date: 2024-01-29 10:30:51
 * @LastEditors: GuangyuanTang 254202042@qq.com
 * @LastEditTime: 2024-01-29 10:34:07
 * @FilePath: \nodejs-tour\5-os-m.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const {
    userInfo,
    cpus,
    uptime,
    release,
    totalmem,
    freemem,
    type
}  = require('os')

console.log(cpus())
console.log(userInfo())

console.log(`the uptime is ${uptime()} secs`)

console.log({
    name:type(),
    release:release(),
    totalmem:totalmem(),
    freemem:freemem()
})
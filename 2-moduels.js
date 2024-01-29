/*
 * @Author: GuangyuanTang 254202042@qq.com
 * @Date: 2024-01-29 10:16:24
 * @LastEditors: GuangyuanTang 254202042@qq.com
 * @LastEditTime: 2024-01-29 10:25:36
 * @FilePath: \nodejs-tour\2-moduels.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// commonjs,every file is module(by default)
// Modules - encapsulated code(only share minium)
const john = 'john'
const secret = "SUPER SECRET"



// sayHi(john)

// console.log(module)

module.exports = {
    john,
    // sayHi
}
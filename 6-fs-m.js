/*
 * @Author: GuangyuanTang 254202042@qq.com
 * @Date: 2024-01-29 10:36:01
 * @LastEditors: GuangyuanTang 254202042@qq.com
 * @LastEditTime: 2024-01-29 10:47:53
 * @FilePath: \nodejs-tour\6-fs-m.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const path = require('path');

const filePath = path.join('/content/','subfolder','test.txt')

console.log(filePath)

const base = path.basename(filePath)

console.log(base)

const absolute = path.resolve(__dirname, 'content','subfolder','test.txt')
console.log(absolute)

const {readFileSync,writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const test = readFileSync('./content/test.txt', 'utf8')


console.log(first)
console.log(test)

writeFileSync(
    './content/result-async.txt',
    `Here is the result ${first} and ${test}`,
    {flag:'a'}
)

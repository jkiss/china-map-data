/* 
 * @Author: Nokey 
 * @Date: 2021-08-11 17:22:52 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2021-08-11 17:23:28
 */

const colors   = require('colors')
const fs       = require('fs')
const cityData2 = require('./city.data')
const cityData3 = require('./city.data-3')

function format(arr) {
    return arr.map(e=>{
        let temp = {
            label: e.text,
            value: e.text,
            zipcode: e.value
        }
        if(e.children){
            temp.children = format(e.children)
        }

        return temp
    })
}
const result2 = format(cityData2)
const result3 = format(cityData3)

fs.writeFile(`${__dirname}/city_data_level2.json`, JSON.stringify(result2, null, 4), err=>{
    if(err){
        console.error(err)
    }

    console.log('Write city_data_level2.json'.cyan)
})

fs.writeFile(`${__dirname}/city_data_level3.json`, JSON.stringify(result3, null, 4), err=>{
    if(err){
        console.error(err)
    }

    console.log('Write city_data_level3.json'.green)
})
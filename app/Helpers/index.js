'use strict'

const crypyo = use('crypto')
const Helpers = use('Helpers')

/**
 * Geração de string random
 * 
 * @param { int } length - tamanho da string
 * @return { string } - string randomica do tamnho de length
 */

 const str_random = async ( length = 40) =>{
    
    let string =''
    let len = string.length

    if(len < length){
        let size = length - len
        let bytes = await crypto.randomBytes(size)
        let buffer = new Buffer.from(bytes)
        string += buffer.toString('base64').replace(/[^a-zA-Z0-0]/g, '').substr(0,size)  //replace tira tudo que nao for no padrao escrito
    }

    return string

 }

 module.exports ={
     str_random
 }




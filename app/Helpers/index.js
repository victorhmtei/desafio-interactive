'use strict'

const crypto = use('crypto')
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
        let buffer = Buffer.from(bytes)
        string += buffer.toString('base64').replace(/[^a-zA-Z0-0]/g, '').substr(0,size)  //replace tira tudo que nao for no padrao escrito
    }

    return string

 }

 /**
  * Move um arquivo para um caminho especificado, se nenhum for especificado entao 'public/uploads sera utilizado
  * 
  * @param { FileJar} file o arquivo a ser gerenciado
  * @param {string} path o caminho apra onde o arquivo deve ser movido
  * @return {Object<FileJar>}
  * 
  */

  const manage_single_upload = async ( file, path = null) => {
      path = path ? path : Helpers.publicPath('uploads')
      const random_name = await str_random(30)
      let filename = `${new Date().getTime()} - ${random_name}.${file.subtype}`

      //renomeia o arquivo e move ele para o path

      await file.move(path, {
          name: filename
      })

      return file

  }

  /**
   * Move multiplos arquivos para um caminho especificado, se nenhum for especificado entao 'public/uploads sera utilizado
   * @param {FileJar} fileJar
   * @param { string} path 
   * @return { Object}
   * 
   */

   const manage_multiple_uploads = async ( fileJar, path = null) =>{
       path = path ? path : Helpers.publicPath('uploads')

       let successes = [],
       errors = []

       await Promise.all(fileJar.files.map(async file =>{
           let random_name = await str_random(30)
           let filename = `${new Date().getTime()} - ${random_name}.${file.subtype}`

           //move o arquivo

           await file.move(path, {
               name: filename
           })

           //verifca se moveu mesmo

           if(file.moved()){
               successes.push(file)
           } else{
               errors.push(file.error())
           }
       })
       )

       return { successes, errors}
   }

 module.exports ={
     str_random,
     manage_single_upload,
     manage_multiple_uploads

 }




'use strict'

class AdminStoreUser {
  get rules () {
    let userID = this.ctx.params.id
    let rule = ''

    //significa que o usuario esta atualizando

    if(userID){
      rule = `unique:users,email,id,${userID}`
    }else{
      rule = 'unique:users,email|required'
    }
    return {
      // validation rules para admin adicionar user
      email:rule

    }
  }
}

module.exports = AdminStoreUser

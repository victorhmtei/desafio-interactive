'use strict'

class AuthRegister {
  get rules () {
    return {
      // validation rules
      name: 'required',
      surname: 'required',
      email: 'required|email|unique:users,email',
      password:'required|confirmed'
      
    }
  }

  get messages(){
    return{
      'name.required': 'O nome é Obrigatorio',
      'surname.required': 'O sobrenome é obrigatorio',
      'email.required': 'O email é obrigatorio',
      'email.email': 'E-mail é inválido',
      'email.unique': 'Este e-mail já existe',
      'password.required': 'A senha é Obrigatoria',
      'password.confirmed': 'As senhas não são iguais'
    }
  }
}

module.exports = AuthRegister

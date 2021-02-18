'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {

    image(){
        return this.belongsTo('App/Models/Image')
    }

    /*
    Relacionamento entre Produto e Imagem 
    Galeria de imagem dos produtos
    */

    images(){
        return this.belongsToMany('App/Models/Image')
    }

    /*
    Relacionamento entre Produtos e Categorias
    */

    categories(){
        return this.belongsToMany('App/Models/Category')
    }
}

module.exports = Product

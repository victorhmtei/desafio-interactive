'use strict'

class OrderService{
    constructor(model, trx =false){
        this.model = model
        this.trx = trx
    }


    async syncItems(items){
        if(!Array.isArray(items)){
            return false
        }
        await this.model.items().delete(this.trx)
        await this.model.items().createMany(items, this.trx)
    }


    async updateItems(items){
        let currentItems = await this.model.items().whereIn('id', items.map(item => item.id)).fetch()

        // deleta os itens que o usuario nao quer

        await this.model.items().whereNotIn('id', item.map(item => item.id)).delete(this.trx)

        // atualiza os valores e quantidade

        await Promise.all(currentItems.rows.map(async item =>{
            item.fill(items.find(n=> n.id === item.id))  //metodo fill prenche o objeto item do banco de dados, e mapeia dois arrays

            await item.save(this.trx)
        }))
    }

    

}

module.exports = OrderService
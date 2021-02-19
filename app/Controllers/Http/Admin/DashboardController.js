'use strict'

const DB = use('Database')

class DashboardController {

    async index({response}){
        const users = await DB.from('users').getCount()
        const orders = await DB.from('orders').getCount()
        const products = await DB.from('products').getCount()
        const subtotal = await DB.from('orders_items').getSum('subtotal')
        return response.send({users,subtotal,orders,products })
    }
}

module.exports = DashboardController

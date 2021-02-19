'use strict'

const BumblebeeTransformer = use('Bumblebee/Transformer')
const UserTransformer = use('App/Transformers/Admin/UserTransformer')
const OrderItemTransformer = use('App/Transformers/Admin/OrderItemTransformer')

/**
 * OrderTransformer class
 *
 * @class OrderTransformer
 * @constructor
 */
class OrderTransformer extends BumblebeeTransformer {

  availableInclude(){
    return ['user', 'items']
  }
  /**
   * This method is used to transform the data.
   */
  transform (order) {
    order = order.toJSON()
    return {
     id: order.id,
     status: order.status,
     total: order.total ? parseFloat(order.total.toFixed(2)) : 0,
     date: order.created_at,
     qty_items: order.__meta__&& order.__meta__.qty_items ? order.__meta__.qty_items: 0,     
     subtotal: order.__meta__ && order.__meta__ ? order.__meta__.subtotal : 0,

    }
  }

  includeUser(order){
    return this.item(order.getRelated('user'), UserTransformer)
  }

  includeItems(order){
    return this.item(order.getRelated('items'), OrderItemTransformer)
  }
}

module.exports = OrderTransformer

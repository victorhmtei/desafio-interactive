'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(()=>{
    //

    
    Route.get('products','ProductController.index')
    Route.get('products/:id','ProductController.show')

    Route.get('orders','OrderController.index')
    Route.get('orders/:id','ProductController.show')
    Route.post('orders','ProductController.store')
    Route.put('orders/:id','ProductController.put')
    



}).prefix('v1').namespace('Client')
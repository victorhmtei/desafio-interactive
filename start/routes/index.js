'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

/**
 * Retorna o usuário logado atualmente
 * 
 */
Route.get('v1/me', 'UserController.me')
.as('me')
.middleware('auth')

// importa as rotas de autenticação,admin e cliente
require('./auth')
require('./admin') //rotas do admin
require('./client')//rotas de cliente

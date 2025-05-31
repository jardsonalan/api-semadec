/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.get('/equipes', '#controllers/equipes_controller.index')
router.get('/equipes/:id', '#controllers/equipes_controller.show')
router.post('/equipes', '#controllers/equipes_controller.store')
router.put('/equipes/:id', '#controllers/equipes_controller.update')
router.patch('/equipes/:id', '#controllers/equipes_controller.update')
router.delete('/equipes/:id', '#controllers/equipes_controller.destroy')

// Node Modules
import { Router } from 'express'

import * as authController from '../controllers/auth.controller.js'
import * as authMiddleware from '../middlewares/auth.middleware.js'
const router = Router()

router.post('/sign-up', authController.createUser)
router.post('/sign-in', authController.signIn)
router.get('/test-protected', authMiddleware.verifyToken, (req, res) => {
  return res.send('Tiene acceso a la ruta')
})

export default router

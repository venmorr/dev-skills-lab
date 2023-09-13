import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

router.get('/', skillsCtrl.index)

// GET localhost:3000/users
// router.get('/', function(req, res) {
//   res.send('respond with a resource')
// })

// ^^ this could require a look. ^^

export { router }

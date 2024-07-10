const express  = require('express')
let router = express.Router()
let adminController  = require('../controller/adminController')

router.post('/adminLogin2', adminController.adminLogin2)

module.exports = router
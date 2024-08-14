const express = require('express')
const router = express.Router()
const handleGetBooks = require('../controllers/getBooks')
const handleAddbook = require('../controllers/Addbook')

router.get('/book',handleGetBooks)
router.post('/addbook',handleAddbook)

module.exports=router
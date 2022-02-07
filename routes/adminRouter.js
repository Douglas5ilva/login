const express = require('express')
const router = express.Router()

const auth = require('../controllers/authController')

router.get('/', auth, (req, res)=>{
    if(req.user.admin){res.send('esse area do adm')}
    else {res.status(401).send('access denied')}
    
})

router.get('/free', auth, (req,res)=>{
    res.send('visto somente pelo adm')
})

module.exports = router
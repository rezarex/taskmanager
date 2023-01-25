const express = require('express');

const router = express.Router();

router.route('/').get((req,res)=>{
    res.send('my tasks');
});


module.exports=router
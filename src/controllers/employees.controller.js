const express = require('express');
const router  = express.Router();

const service = require('../service/employee.service');



router.get('/all',(req,res,next)=>{

    res.json({

        employees:service.getAll()
    })
})

router.get('/search/:name',(req,res,next)=>{

    console.log(req.params.name);
    res.json(service.getByName(req.params.name))
})


module.exports = router;

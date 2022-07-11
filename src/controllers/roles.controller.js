const express = require('express');
const router  = express.Router();
const createError  = require('http-errors')

const service = require('../service/roles.service');
const { createResultOut } = require('../utils/output');


router.get('/all',(req,res,next)=>{

    res.json(createResultOut(service.getAll()));
})

router.get('/search/:code',(req,res,next)=>{

    console.log(req.params.code);
    res.json(service.search(req.params.code))
})

router.post('/save', function (req, res, next) {

    if(service.search(req.body.role_code).length){


        next(createError(404, 'Role Code must be unique.'));

    } else {
        let newItem = service.save(req.body);

        res.status(201).json(   newItem);
    }


});


module.exports = router;


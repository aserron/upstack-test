const createError = require('http-errors');



const express = require('express');
const router  = express.Router();

const service = require('../service/employee.service');




router.get('/all',(req,res,next)=>{

    res.json({

        employees:service.getAll()
    })
})

router.get('/username/:username',(req,res,next)=>{

    console.log(req.params.name);
    res.json(service.getByUserName(req.params.username))
})
router.get('/search/code',(req,res,next)=>{

    console.log(req.params.name);
    res.json(service.searchByName(req.params.name))
})

router.post('/save', function (req, res, next) {

    let err = new createError.BadRequest()
    let msg = '';

    /**
     *
     * @type {IEmployee}
     */
    let data = req.body;

    if(service.getByUserName(data.username)){
        msg = 'username must be unique.';
        err.message = msg;
        next(err);
    }
    else if(service.getByEmail(data.email)){
        err.message = 'email must be unique.'
        next(err);
    }
    else if(!data.role_id){
        err.message = 'Role Id must be present.';
        next(err);
    }
    else {
        let newItem = service.saveEmployee(req.body);

        res.status(201).json(   newItem);
    }

});


module.exports = router;


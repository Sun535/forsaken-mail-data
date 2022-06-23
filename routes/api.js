/**
 * Created by Hongcai Deng on 2015/12/28.
 */

'use strict';


let express = require('express');
let request = require('../modules/request')
let router = express.Router();

router.get('/', function(req, res) {
  res.end();
});

router.get("/getMail",function(req, res){
  let obj = req.query
  if(req.header("token")!=process.env.token){
    res.send({code:-1,status:'error'})
    return
  }
  obj.offset = req.query.offset | 0
  request.getMail(obj).then(r=>{
    if(r.data.code == 200){
      res.send({code:200,status:'ok',data:r.data.data})
    }
  }).catch(err=>{
    res.send({code:-1,status:'error',data:err})
  })
})

module.exports = router;

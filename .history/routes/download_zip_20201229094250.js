var express = require('express');
var router = express.Router();

var path = require('path');
fs = require('fs');

/* POST users listing. */
router.get('/', function (req, res, next) {
    console.log(req.body);
    exports.downaloadAllCsv = functionreq，res）{
 
        var file ='我的zip文件的本地路径'，
        filename = path.basename ）; 
        
        res.setHeader'Content-disposition'，'attachment; filename ='+ filename）; 
        
        res.setHeader'Content-type：'，'application / zip'）; 
        
        var filestream = fs.createReadStreamfile）; 
        filestream.piperes）; 
       }; 
    res.send(JSON.stringify(content));
});

module.exports = router;
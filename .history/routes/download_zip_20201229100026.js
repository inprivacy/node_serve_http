var express = require('express');
var router = express.Router();

var path = require('path');
fs = require('fs');

/* POST users listing. */
router.get('/', function (req, res, next) {
    console.log(req.body);
    exports.downaloadAllCsv = function (req, res) {

        var file = '我的zip文件的本地路径',
            filename = path.basename;

        res.setHeader('Content-disposition', 'attachment; filename =' + filename);

        res.setHeader('Content-type：', 'application / zip');

        var filestream = fs.createReadStream(file);
        filestream.pipe(res);
    };
    res.download('public/assets/汉印 电子面单打印机 编程手册_TSPL_Rev.1.1.zip');
    // res.send(JSON.stringify(content));
});

module.exports = router;
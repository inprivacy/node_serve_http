var express = require('express');
var router = express.Router();

/* POST users listing. */
router.post('/', function (req, res, next) {
    console.log(req.body);
    var content = {
        cmd: 'month_use_time',
        data: {
            hiv: (Math.random() * 20).toFixed(2),
            wswsw: (Math.random() * 20).toFixed(2),
            bywsw: (Math.random() * 20).toFixed(2),
            bcb: (Math.random() * 20).toFixed(2),
            bdfl: (Math.random() * 20).toFixed(2),
            pcr: (Math.random() * 20).toFixed(2),
            jiehe: (Math.random() * 20).toFixed(2),
        },
        error_code: 0,
    };
    res.send(JSON.stringify(content));
});

module.exports = router;



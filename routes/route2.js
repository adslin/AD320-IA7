var express = require('express');
var router = express.Router();
const colors = require('../colors');

router.get('/', (req, res) => {
    	return res.send({ error: true, message: 'Colors App' })
});

router.get('/all', (req, res) => {
     	var allColors = colors.getAll();
     	var result = JSON.stringify(allColors, (error, result, fields) => {
             if (error) {
                res.status(500).send(error);
            }
                res.send(result);
    });
}); 

router.get('/:color', (req, res) => {
        var myColor = colors.getOne({color:req.params.color});
        var result = JSON.stringify(myColor, (error, result, fields) => {
             if (error) {
                res.status(500).send(error);
            }
                res.send({ myColor: req.params.color }); 
    });
});  

module.exports = router;
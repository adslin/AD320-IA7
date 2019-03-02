var express = require('express');
var router = express.Router();
var fs = require("fs");
var data = fs.readFileSync("./colors.json");
var jsonFormat = JSON.parse(data);

router.get('/all', (req, res, next) => {
    res.send(jsonFormat.colors);
});

router.get('/:color', (req, res, next) => {
                
    for (var color in jsonFormat.colors) {
        if(jsonFormat.colors[color].color == req.params.color.toLowerCase()) {
        res.send(jsonFormat.colors[color]);
        } 
    }; 

        switch (color) {

            case 'black':
                res.send(colors.colors[0])
                break;

            case 'white':
                res.send(colors.colors[1])
                break;

            case 'red':
                res.send(colors.colors[2])
                break;

            case 'blue':                        
                res.send(colors.colors[3])
                break;

            case 'yellow':
                res.send(colors.colors[4])
                break;

            case 'green':
                res.json(colors.colors[5])
                break;
            
            default:
                return res.send({ error: true, message: 'Colors App' })

            }
        })        
module.exports = router;
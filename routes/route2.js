var express = require('express');
var router = express.Router();
var fs = require("fs");
var data = fs.readFileSync("./colors.json");
var jsonFormat = JSON.parse(data);


router.get('/all', (req, res, next) => {
    res.send(jsonFormat);
});

router.get('/:color', (req, res, next) => {

    for (var color in jsonFormat.colors) {
        if(jsonFormat.colors[color].color == req.params.color.toLowerCase()) {
        return res.send(jsonFormat.colors[color]);
    } 

        (err) => {
            console.log(err);
            res.sendStatus(500);
            return;
        }
}; 

        switch (color) {

            case 'black':
                res.send(jsonFormat[0])
                break;

            case 'white':
                res.send(jsonFormat[1])
                break;

            case 'red':
                res.send(jsonFormat[2])
                break;

            case 'blue':                        
                res.send(jsonFormat[3])
                break;

            case 'yellow':
                res.send(jsonFormat[4])
                break;

            case 'green':
                res.json(jsonFormat[5])
                break;
            
            default:
                res.send('Not Found');
                break;
                
            }

        }) 

module.exports = router;
var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send({      
        "inmuebles" : [
        {
            "superficie": 140.0,
            "habitaciones": 4,
            "precio": 30056.15,
            "vivienda": {
                "calle": "Maestro Faus",
                "portal": 4,
                "piso": 1,
                "letra": "D"
            },
            "propietario": "Josefo"
        },
        {
            "superficie": 452.6,
            "habitaciones": 5,
            "precio": 50000.69,
            "vivienda": {
                "calle": "Pontezuelas",
                "portal": 6,
                "piso": 5,
                "letra": "F"
            },
            "propietario": "Marijol"
        }
    ] });
});

app.listen(process.env.PORT || 8080);
console.log('Servidor en http://127.0.0.1:8080/');
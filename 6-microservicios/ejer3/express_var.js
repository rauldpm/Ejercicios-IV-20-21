const { response } = require('express');
var express = require('express')
var app = express()

module.exports = app

class Vivienda {
    constructor(calle, portal, piso, letra) {
        this.calle = calle;
        this.portal = portal;
        this.piso = piso;
        this.letra = letra;
    }
}
var viviendas = new Array;

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

// Ejemplo: 127.0.0.1:8080/vivienda?calle=Alhondiga&portal=3&piso=1&letra=E
app.get('/vivienda', function (req, res) {
    var vivi = new Vivienda(
        req.query.calle,
        req.query.portal,
        req.query.piso,
        req.query.letra
    );
    res.send(vivi);
});

app.listen(process.env.PORT || 8080);
console.log('Servidor en http://127.0.0.1:8080/');
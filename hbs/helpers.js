//Archivo de helpers

//Importamos hbs, handlebars
const hbs = require('hbs');



//helpers
hbs.registerHelper('getYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {

    let palabras = texto.split(' ');
    palabras.forEach((palabra, id) => {
        palabras[id] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');

});

module.exports = {
    hbs
}
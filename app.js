// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum };

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

function fromDollarToYen(dollars) {
    const euros = dollars / oneEuroIs.USD;
    return euros * oneEuroIs.JPY;
}

function fromYentoPound (yen) {
    const euros = yen / oneEuroIs.JPY;
    return euros * oneEuroIs.GBP;
}



module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYentoPound };
// initiating a temperature in kelvin
const kelvin = 293;

// convertion from Kelvin to celsisue
let celsius = kelvin - 273;

// convertion to Fahrenheit
let fahrenheit = celsius * (9/5) + 32;

// rounding down the Fahrenheit Temoerature
fahrenheit = Math.floor(fahrenheit);

console.log(`${kelvin} Kelvin is ${fahrenheit} degrees Fahrenheit`);

// conveting Celcius to Newton
let Newton = celsius * (33/100);

Newton = Math.floor(Newton);

console.log(`${celsius} Celsius is ${Newton} degrees Newton`)
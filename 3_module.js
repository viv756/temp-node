// Modules - Encapsulate Code (only share minimum)


const names = require('./3_name_module')
const sayHi = require('./3_first_module')
const data = require('./4_alternative_flavor')
require('./5_mind_granade')
console.log(data);
console.log(names);

sayHi("vivek")
sayHi(names.john)
sayHi(names.jane)

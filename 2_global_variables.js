// GLOBAL - No WINDOW !!!!

// __dirname - path to current directory
// __filename - file name
// reqiure  - function to use modules(common JS)
// module - info about current module (file)
// process - info about env where the program being executed

console.log(__dirname);
console.log(module);
setInterval(() => {
    console.log("hello world");
},1000)
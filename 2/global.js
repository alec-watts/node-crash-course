// Global object

console.log(global);

setTimeout (()  => {
    console.log('in the timeout')
    clearInterval(inter)
}, 3000);

const inter = setInterval (() => {
    console.log('in the interval')
}, 1000)

console.log(__dirname);
console.log(__filename);
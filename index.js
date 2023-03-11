function add(a, b) {
    return a + b;
}
add(1,80); //returns 81

function subtract(a, b) {
    return a-b;
}
subtract(60, 40); //returns 20

function multiply(a, b) {
    return a*b;
}
multiply(2,3.4) //returns 6.8

function divide(a, b) {
    return a/b;
}
//increment function
function increment(n) {
    return(n+1)
}
//decrement function
function decrement(n) {
    return(n-1)
}
//preserves n\'s decimals (it parses n as a floating point number) and returns the parsed number
function preserveDecimal(n) {
    return(n);
}
function preserveDecimal(n){
return parseFloat(n)
}
//parses n as an integer and returns the parsed integer
function makeInt(n) {
    return(n);
}
function makeInt(n){
    return parseFloat(n, 10)
    }
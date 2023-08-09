const numX = +prompt('Введіть число x: ');
const numY = +prompt('Введіть число y: ');

if(numX > numY) {
    alert('x > y');
} else if(numX < numY) {
    alert('x < y')
} else {
    alert('x = y')
}
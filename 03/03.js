var a = 1;
var b = -400;
var c = 0.4;


var min = a;
if (b < min) {
    min = b
}
if (c < min) {
    min = c;
}


alert(min);

// я бы использовала так
// (https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/min)
// alert(Math.min(a, b, c));
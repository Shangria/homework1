var day = prompt("День недели");
var saturday = '6';
var sunday = '7';

if (day !== saturday && day !== sunday) {
    console.log('Надо на работу')
} else {
    console.log('Выходной')
}

var workingDay = 5;
workingDay < prompt("День недели") ? console.log('Остаешься дома') : console.log('На работу');
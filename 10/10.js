//Время потраченное на дорогу
var timeToTramMinutes = 15;
var timeInTramMinutes = 40;
var timeFromTramToWorkMinutes = 5;
var allTime = 0;
var timeToWork = [timeFromTramToWorkMinutes, timeInTramMinutes, timeToTramMinutes];

//функция, которая считает кол-во времени потраченное за n кол-во дней
function calcAllTimeToDays(howManyDays) {
    for (var i = 0; i < timeToWork.length; i++) {
        allTime += timeToWork[i];
    }
    alert(' Время на проезд до работы ' + allTime + ' ' + 'минут');
    howManyDays = prompt('введите кол-во дней');
    return allTime * howManyDays
}

alert('кол-во минут за n дней' + ' ' + ' - ' + calcAllTimeToDays() + ' ' + 'минут');



﻿//переменные


var message; // a-z, A-Z, 0-9, $, _ название нельзя начинать с цифры, имена переменных чуствительны к регистру

var myMessage;
myMessage ='Сообщение';
var myNumber = 10.4567; // мы може наполнять переменные числами, числами с точкой, отрицальетльными числами

var myString = 'Здоров Иван'; // мы можем поместить в переменную строку, это заключенный в кавычки текст или пустая строка без контента, число в кавычках будет воспринято как строка

var myBoolean = true; // булиан тип это логический тип данных true или false

var myNull = null; //у переменной присвоено значение но оно равняеться ничему

var myUndefined = undefined; // значение у переменно     вообще отсутствет

// мы изучили 5 типов данных которые принято называть примитивными типами данных

var myObject ={    //это обект - 6 тип даннх который представляет из себя некую солянку их всех типов данных
    name:'Ivan',
    age: 35
};

//Числа

/*
var result = 40 + 10;
console.log(40 + myNumber);
console.log(40 - myNumber);
console.log(40 * myNumber);
console.log(40 / myNumber);
myNumber --;
console.log(myNumber);
console.log(Math.round(5.49)); //метод round всегда округляет математически правильно
console.log(Math.ceil(5.49)); //метод ceil всегда округляет в большую сторону
console.log(Math.floor(5.6)); //метод floor всегда округляет в меньшую сторону


var newNumber = 2.455;
console.log(newNumber.toFixed(1)); //после применения метода toFixed будет возвращено новое число с 1 знаком после точки округляя по математическим правилам
*/

// работа со строками

/*
console.log('40' + myNumber); //когда одна строка прибавляеться к другой строке это действие называется конкотенация

console.log(myString + ' Как дела?');
console.log(myString.toLowerCase()); // метод toLowerCase берет строку из myString и из верхего регистра букв применяет ее в нижний регистр

console.log(myString.toUpperCase()); // метод toUpperCase переводит текст в верхний регистр
*/


//Массивы

/*
var names = ['Иван','Богдан','Jon']; // в массив могут быть помешены разные типы данных, но для удобаста лучше использовать лишь один тип

console.log(names[1].toUpperCase());
names[0] = 'Masha'; // таким образом мы меняемзначение под порядковым номером 0 в масиве с Ивана на Masha
console.log(names[0]);
names.push('Sveta'); // используя метод push мы добавляем новое значение в конец массива
console.log(names[3]);
console.log(names); // не указывая порядковый номер элемента в масиве мы вы водим все содержимое масива
*/



//Условия

if ('Вася' != 'Петя' || myNumber > 20) {
    console.log('Uslovie vypolneno!');
}

if (myNumber < 20) {
    console.log('Число меньше 20');
} else {
    console.log('Число больше 20');
}
 //В данной теме розясняеться работа оператора if как самостоятельно так и с оператором else, так же поясняеться работа условий > - больше , < - меньше, == равно, != неравно( который не учитивывает типы данных при сравнении) !== строго не равно( он учитывает типы данных при сравнении) && оператор сравнения и, || или , <= >= больше или равно меньше или равно, и их разные комбинации 


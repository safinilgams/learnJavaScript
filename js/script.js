/* Задание на урок:



1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:

'Сколько фильмов вы уже посмотрели?'



2) Создать объект personalMovieDB и в него поместить такие свойства:

    - count - сюда передается ответ на первый вопрос

    - movies - в это свойство поместить пустой объект

    - actors - тоже поместить пустой объект

    - genres - сюда поместить пустой массив

    - privat - в это свойство поместить boolean(логическое) значение false



3) Задайте пользователю по два раза вопросы:

    - 'Один из последних просмотренных фильмов?'

    - 'На сколько оцените его?'

Ответы стоит поместить в отдельные переменные

Записать ответы в объект movies в формате: 

    movies: {

        'logan': '8.1'

    }



Проверить, чтобы все работало без ошибок в консоли */
/*
1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/


'use strict';


// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// if (personalMovieDB.count < 10) {
//     alert('Мало фильмов просмотрели!');
// } else if (personalMovieDB.count < 30) {
//     alert('Вы классический зритель!');
// } else if (personalMovieDB.count >= 30) {
//     alert('О! Вы киноман!');
// } else {
//     alert('Произошла ошибка!');
// }


// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?'),
//         b = prompt('На сколько оцените его?');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         i--;
//         console.log('err');
//     }
// }


// console.log(personalMovieDB);

// let c = 4;

// function addX(x) {
//     return function (n) {
//         return n + x;
//     };
// }
// const addThree = addX(3);
// console.log(addThree);
// let d = addThree(c);
// console.log('example partial application', d);

// function showMessage(from, text) {
//     text = text || 'Текст не добавлен';
//     from = "*" + from +"*";
//     alert(from + ":" + text);
// }

// let from = 'Анна';
// showMessage(from);
// showMessage(from, 'Привет!');
// showMessage(from, 'С добрым утром!');

// alert(from);

// function checkAge(age){
//     // if(age > 18) {
//     //     return true;
//     // } else {
//     //     return confirm('А родители разрешили?');
//     // }
// //    return (age > 18) ? true : confirm('А родители разрешили?');
//     return (age > 18) || confirm('А родители разрешили?');
// }

// let age=+prompt('Сколько Вам лет?','');

// if(checkAge(age)){
//     alert('Добро пожаловать!');
// } else {
//     alert('Извините! Вам пора домой, спать!');
// }

// function min( a, b){
//     return a < b ? a : b;
// }

// alert(min(1,2));
// alert(min(2,2));
// alert(min(4,3));



// function pow( a, n){
//     if(n==0){
//         return 1;
//     }
//     let r=a;
//     for(;n>1;n--){
//         r*=a;
//     }
//     return r;
// }

// let a = +prompt('a=','');
// let n = +prompt('введите натуральное число n=','');
// if(n > 0){
//     alert(`${a} в степени ${n} будет равно: ${pow(a,n)}`);
// } else {
//     alert(`${n} не натуральное число!`);
// }


// function ask(question, yes , no){
//     return (confirm(question)) ? yes() : no();
// }

// ask('Как насчет побухать?',
//     ()=>alert('Давай наливай!!!!'),
//     ()=> alert('Жаль, такой вечер пропадает....')
// );

'use strict';

// let user={};
// user.name='Johan';
// user.surname='Smith';
// user.name='Pedro';
// for (let key in user){
//     alert(`${key} : "${user[key]}"`);

// }

// delete user.name;

// for (let key in user){
//     alert(`${key} : "${user[key]}"`);

// }

function isEmpty(obj){
    for( let key in obj){
        return false;
    }
    return true;
}

// let schedule={};
// alert(isEmpty(schedule));

// schedule["8:30"]="get up";
// alert(isEmpty(schedule));

// function sumPay(obj){
//     if(isEmpty(obj)){
//         return 0;
//     }
//     let sum=0;
//     for(let key in obj){
//         sum+=obj[key];
//     }
//     return sum;
// }

// let salaries = {
//     John : 100,
//     Ann : 160,
//     Pete : 130
// };

// salaries={};

// alert(sumPay(salaries));

function multiplyNumeric(obj){
    for(let key in obj){
        if(typeof(obj[key]) == 'number'){
           obj[key] *= 2;
        }
    }
}

let menu={
    width: 165,
    length: 35,
    height: 55,
    article: "567",
    MyMenu: "MyMenu"
};

multiplyNumeric(menu);

for(let key in menu){
    alert(`${key} : ${menu[key]}`);
}
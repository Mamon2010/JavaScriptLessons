//1. Создать массив week и записать в него дни недели в виде строк
// let week = new Array("Понедельник", "Вторник", "Среда", "Четверг", "Пятница",
//     "Суббота", "Воскресение");
// for (let i = 0; i < week.length; i++) {
//     let res = 'res' + i;
//     switch (week[i]) {
//         case 'Суббота':
//             {
//                 document.getElementById(res).innerHTML = week[i].bold().italics();
//             }
//             break;
//         case 'Воскресение':
//             {
//                 document.getElementById(res).innerHTML = week[i].bold();
//             }
//             break;

//         default:
//             {
//                 document.getElementById(res).innerHTML = week[i];
//             }
//             break;
//     }
// }


//2. Создать массив arr = []
let arrNum = ['123', '432', '237', '235', '1734', '553', '234'],
    strNum = arrNum.toString();
let arrSpecialNum = [];

for (let i = 0; i < strNum.length; i++) {
    if (strNum[i] == 3 || strNum[i] == 7) {
        arrSpecialNum.push(strNum[i]);
    }
}
console.log(arrSpecialNum);
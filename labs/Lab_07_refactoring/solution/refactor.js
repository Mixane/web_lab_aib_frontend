// Почему задания называются так? Это типа майнкрафт?)))
// Задание 1. level stone

let variable1 = prompt("var one");
let variable2 = prompt("var two");
if (variable1 === variable2) {
  console.log("equal")
} else {
  console.log("not equal");
}
let variable3 = "world";
let result = variable1 + variable2;

// Задание 2 level iron

const fruits = ["apple", "strawberry", "blueberry", "raspberry", "lemon"];
for (let i = 0; i < fruits.length; i++) {
  switch (i) {
    case 0:
      console.log(`${fruits[i]} apple green`);
      break;
    case 1:
      console.log(`${fruits[i]} strawberry red`);
      break;
    case 2:
      console.log(`${fruits[i]} blueberry blue`);
      break;
    case 3:
      console.log(`${fruits[i]} raspberry light red`);
      break;
    case 4:
      console.log(`${fruits[i]} lemon yellow`);
      break;
    default:
      break;
  }
}

// Задание 3 level gold

let countPerson;
do {
  countPerson = prompt("Введите кол-во человек ", "");
  countPerson = parseFloat(countPerson);
} while ( !isNaN(countPerson) );

let salaryPerson;
do {
  salaryPerson = prompt("Введите зарплату на человека ","");
  salaryPerson = parseFloat(salaryPerson);
} while ( !isNaN(salaryPerson) );

let finalCost = countPerson * salaryPerson;
alert(`Затраты на ЗП: ${finalCost}`);

// Задание 4 здесь не было level'а поэтому diamond

let listOfStudent = [
  {
    FIO: "Петров А.А",
    mark: 5,
  },
  {
    FIO: "Иванов Б.Б",
    mark: 3.4,
  },
  {
    FIO: "Сидоров Г.Г",
    mark: 9,
  },
  {
    FIO: "Немолодой Д.Д",
    mark: 2,
  },
  {
    FIO: "Молодой Е.Е",
    mark: 3.4,
  },
];

let average = 0;
let count = 0;
let listBadStudent = [];

for (let index = 0; index < listOfStudent.length; index++) {
  if ( 
    !(listOfStudent[index].mark <= 5 && 
      listOfStudent[index].mark >= 0) 
    ) {
      continue;
      }
  if (listOfStudent[index].mark < 4) {
    listBadStudent.push(listOfStudent[index]);
  }
  average += listOfStudent[index].mark;
  count += 1;
}

average /= count;
console.log("Средняя оценка: " + average);
console.log("Плохие студенты: ");

if (listBadStudent.length === 0) console.log("Таких нет");
listBadStudent.forEach((elem) =>
  console.log(`Фио: ${elem.FIO} Оценка: ${elem.mark}`)
);
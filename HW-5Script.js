// Задание 1

let compr = (a, b) => {
   if (a <= b) {
      return a;
   } else {
      return b;
   }
};
console.log(compr(8, 4));
// Задание 2

let inp = Number(prompt("Введите число"));
let result = (inp % 2);

let even = (result) => {
   if (result == 0) {
      return "Число четное";
   } else {
      return "Число не четное";
   }
};
console.log(even());

// Задание 3
let exp = (a) => {
   console.log(a ** 2);
};
exp(10);

let newExp = (a) => {
   return alert(a ** 2);
};
newExp(15);

// Задание 4

let age = Number(prompt("Укажите Ваш возраст"));

function control() {
   if (age < 0) {
      alert("Вы ввели неправильное значение");
   } else {
      if (age < 13) {
         alert("Привет, друг!");
      } else {
         alert("Добро пожаловать!");
      }
   }
}
control();

// Задание 5
function mult(num1, num2) {

   if (isNaN(num1) || isNaN(num2)) {
      alert("Одно или оба значения не являются числом");
   } else {
      return alert(num1 * num2);
   }
}
mult(5, 8);
// Задание 6

function cube(num) {
   num = Number(prompt("Пожалуйста, укажите ваше число."))

   if (!parseInt(num)) {
      alert ('Нужно писать число!');
   } else {
      result = num ** 3;
      return alert(`num в кубе равняется ${result}.`)
   }
}
cube()

// Задание 7
let Pi = Number(3.14);
let circle1 = {
   radius: 8,
   getArea() {
      area = Pi * (this.radius ** 2);
      return area;
   },
   getPerimeter() {
      perimeter = 2 * Pi * this.radius;
      return perimeter;
   },
};
let circle2 = {
   radius: 5,
   getArea() {
      area = Pi * (this.radius ** 2);
      return area;
   },
   getPerimeter() {
      perimeter = 2 * Pi * this.radius;
      return perimeter;
   },
};
console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());

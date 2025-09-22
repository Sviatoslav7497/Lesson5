// --1--
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

// 1) Об'єкт студента з методом
const student = {
  name: "",
  specialty: "",
  averageGrade: 0,
  missedClasses: 0,

  // 2) Метод для виведення інформації
  showInfo() {
    return `Студент: ${this.name}, Спеціальність: ${this.specialty}, 
                Середній бал: ${this.averageGrade}, Пропущено занять: ${this.missedClasses}`;
  },
};

// 3) Три варіанти студентів
const student1 = {
  name: "Олена Петренко",
  specialty: "Комп'ютерні науки",
  averageGrade: 95.5,
  missedClasses: 2,
};

const student2 = {
  name: "Іван Коваль",
  specialty: "Інженерія програмного забезпечення",
  averageGrade: 88.2,
  missedClasses: 5,
};

const student3 = {
  name: "Марія Сидоренко",
  specialty: "Кібербезпека",
  averageGrade: 91.8,
  missedClasses: 1,
};

// 4) Використання call, apply, bind
console.log("=== ВИКОРИСТАННЯ CALL ===");
console.log(student.showInfo.call(student1));

console.log("\n=== ВИКОРИСТАННЯ APPLY ===");
console.log(student.showInfo.apply(student2));

console.log("\n=== ВИКОРИСТАННЯ BIND ===");
const showStudent3Info = student.showInfo.bind(student3);
console.log(showStudent3Info());

// Додатковий приклад з параметрами
const detailedStudent = {
  showDetailedInfo(course, university) {
    return `Студент: ${this.name}, Спеціальність: ${this.specialty}, 
                Середній бал: ${this.averageGrade}, Пропущено занять: ${this.missedClasses},
                Курс: ${course}, Університет: ${university}`;
  },
};

console.log("\n=== ДЕТАЛЬНА ІНФОРМАЦІЯ З PARAMETERS ===");
console.log(detailedStudent.showDetailedInfo.call(student1, 3, "КПІ"));
console.log(
  detailedStudent.showDetailedInfo.apply(student2, [
    2,
    "Львівська політехніка",
  ]),
);

const detailedStudent3 = detailedStudent.showDetailedInfo.bind(
  student3,
  4,
  "КНУ",
);
console.log(detailedStudent3());

// 2
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

// const info = {
//     showInfo() {
//       console.log(this.def);
//     },
//   };

//   const html = {
//     def: "HTML — стандартизована мова розмітки документів для перегляду вебсторінок у браузері.",
//   };

//   const css = {
//     def: "CSS — спеціальна мова стилю сторінок, що використовується для опису їхнього зовнішнього вигляду.",
//   };

//   document
//   .querySelector("#html")
//   .addEventListener("click", info.showInfo.bind(html));

// document
//   .querySelector("#css")
//   .addEventListener("click", info.showInfo.bind(css));

// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) jrange 89. 3,4

function shop(productName, pricePerKg, quantity) {
  const totalCost = pricePerKg * quantity;
  return `Товар: ${productName}, Вартість: ${totalCost.toFixed(2)} грн`;
}

// Перевірка на варіантах
console.log(shop("banana", 30, 4.5));
console.log(shop("cherry", 58, 1.3));
console.log(shop("orange", 89, 3.4));

// Додатковий варіант з об'єктом
function shopAdvanced(productName, pricePerKg, quantity) {
  const totalCost = pricePerKg * quantity;

  return {
    product: productName,
    pricePerKg: pricePerKg,
    quantity: quantity,
    totalCost: totalCost.toFixed(2),
    getInfo: function () {
      return `Товар: ${this.product}, Ціна за кг: ${this.pricePerKg} грн, Кількість: ${this.quantity} кг, Загальна вартість: ${this.totalCost} грн`;
    },
  };
}

console.log("\n=== РОЗШИРЕНА ВЕРСІЯ ===");
const order1 = shopAdvanced("banana", 30, 4.5);
const order2 = shopAdvanced("cherry", 58, 1.3);
const order3 = shopAdvanced("orange", 89, 3.4);

console.log(order1.getInfo());
console.log(order2.getInfo());
console.log(order3.getInfo());

// Альтернативний варіант з функцією, що повертає об'єкт
function createOrder(productName, pricePerKg, quantity) {
  const total = pricePerKg * quantity;

  return {
    name: productName,
    price: pricePerKg,
    weight: quantity,
    total: total.toFixed(2),
  };
}

console.log("\n=== ВАРІАНТ З ПОВЕРНЕННЯМ ОБ'ЄКТА ===");
console.log(createOrder("banana", 30, 4.5));
console.log(createOrder("cherry", 58, 1.3));
console.log(createOrder("orange", 89, 3.4));

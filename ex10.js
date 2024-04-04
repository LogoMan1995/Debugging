// 10. Исправьте две ошибки индексации в следующей функции, чтобы все числа от 1 до 5 выводились на консоль.

function countToFive() {
    let firstFive = "12345";
    let len = firstFive.length;
    for (let i = 0; i < len; i++) {
      console.log(firstFive[i]);
    }
  }

countToFive()
// 9. Функция raiseToPower возводит основание в степень. К сожалению, он вызывается неправильно — исправьте код, чтобы значение power равнялось ожидаемому 8.



function raiseToPower(b, e) {
    return Math.pow(b, e);
  }
  
  let base = 2;
  let exp = 3;
  let power = raiseToPower(base, exp);
  console.log(power);


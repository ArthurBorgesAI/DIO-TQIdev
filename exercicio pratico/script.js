function comparaNumeros(x,y) {
  const z = x+y;

  if (x == y){
    switch (true) {
      case (z<=10):
        return `Os números ${x}  e  ${y} são iguais. Sua soma é  ${z}, que é menor que 10 e menor que 20.`;
        break;
      case ((z>10) && (z<=20)):
        return `Os números ${x} e ${y}  são iguais. Sua soma é  ${z}, que é maior que 10 e menor ou igual a 20.`;
        break;
      case (z>20):
        return `Os números  ${x}  e  ${y}  são iguais. Sua soma é  ${z}, que é maior que 10 e maior que 20.` ;
        break;
    }
  }else{
    switch (true) {
      case (z<=10):
        return `Os números  ${x}  e  ${y}  não são iguais. Sua soma é  ${z}, que é menor que 10 e menor que 20.`;
        break;
      case ((z>10) && (z<=20)):
        return `Os números  ${x}  e  ${y}  não são iguais. Sua soma é  ${z}, que é maior que 10 e menor ou igual a 20.`;
        break;
      case (z>20):
        return `Os números  ${x}  e  ${y}  não são iguais. Sua soma é  ${z}, que é maior que 10 e maior que 20.`;
        break;
    }
  }
}

console.log(comparaNumeros(10,20));

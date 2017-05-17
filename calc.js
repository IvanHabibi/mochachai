let calculator = (x, y, operator) => {

    if (operator == '+') {
      return x+y
    }
    if (operator=='-') {
      return x-y
    }
    if (operator=='*') {
      return x*y
    }
    if (operator=='/') {
      return x/y
    }
    if (operator=='^') {
      return Math.pow(x,y)
    }
    if (operator=='#') {
      return Math.sqrt(x,y)
    }

}


module.exports = calculator;

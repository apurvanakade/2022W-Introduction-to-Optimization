export default print_monomial = function(coefficient, index, with_addition = false) {
  str = "";

  if (with_addition && coefficient >= 0) {
    str += " + ";
  }

  if (coefficient == 1) {
    str += "x_{" + index + "}";
  }
  else if (coefficient == -1) {
    str += "- x_{" + index + "}";
  }
  else if (coefficient == 0) {
    str += "{\\color{white} 0 x_{" + index + "}}";
  }
  else {
    str += coefficient + " x_{" + index + "}";
  }

  return str;
}
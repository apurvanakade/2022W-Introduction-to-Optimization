function print_monomial (coefficient, index, with_addition = false) {
  var str = "";

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

export default function print_linear_combination(coefficients, variable_indices) {
  var str = "";
  if (coefficients.length == 0) {
    return str;
  }

  str += print_monomial(coefficients[0], variable_indices[0] + 1, false);

  for(var i = 1; i < coefficients.length - 1; i++)
    str += print_monomial(coefficients[i], variable_indices[i] + 1, true);
  
  if(coefficients.length > 1)
    str += print_monomial(coefficients[coefficients.length - 1], variable_indices[coefficients.length - 1] + 1, true);

  return str;
}
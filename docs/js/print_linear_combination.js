import print_monomial from './print_monomial.js';

export default function print_linear_combination(coefficients, variable_names) {
  var str = "";
  if (coefficients.length == 0) {
    return str;
  }

  str += print_monomial(coefficients[0], variable_names[0], false);

  for(var i = 1; i < coefficients.length - 1; i++)
    str += print_monomial(coefficients[i], variable_names[i], true);
  
  if(coefficients.length > 1)
    str += print_monomial(coefficients[coefficients.length - 1], variable_names[coefficients.length - 1], true);

  return str;
}
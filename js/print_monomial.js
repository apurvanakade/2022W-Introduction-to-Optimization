export default function print_monomial(coefficient, variable, with_addition = false) {
  var str = "";

  if(coefficient == 0){
    if(with_addition)
      str += "\\color{white}{ + 0 " + variable + "}";
    else
      str += "\\color{white}{ 0 }"  + variable + "}";
  }
  else if(coefficient == 1){
    str += variable;
  }
  else if(coefficient == -1){
    str += "-" + variable;
  }
  else if(coefficient < 0){
    str += coefficient + variable;
  }
  else if(coefficient > 0){
    if (with_addition) {
      str += " + ";
    }
    str += coefficient + variable;
  }
  return str;
}
import print_linear_combination from './print_linear_combination.js';

export default class Constraint{
  constructor(len, coefficients, inequality,constant, variable_indices){ 
    this.len = len;
    this.coefficients = coefficients;
    this.inequality = inequality;
    this.constant = constant;

    if(len != undefined && variable_indices == undefined)
      this.variable_indices = [...Array(this.len).keys()];
    else
      this.variable_indices = variable_indices;  
  }

  // Randomly populate the constraint 
  randomize(len, upper_bound = 10, lower_bound = -10, variable_indices){
    if (this.len == undefined){
      if(len == undefined)
        this.len = Math.floor(Math.random() * 10) + 1;
      else 
        this.len = len;
    }

    if(len != undefined && this.variable_indices == undefined)
      this.variable_indices = [...Array(this.len).keys()]; 
    
    if(this.variable_indices == undefined){
      if(variable_indices == undefined)
        this.variable_indices = [...Array(this.len).keys()];
      else
        this.variable_indices = variable_indices;
    }

    this.coefficients = [];
    this.inequality = Math.floor(Math.random() * 3);
    this.constant = Math.floor(Math.random() * (upper_bound - lower_bound + 1) + lower_bound);
    let all_zero = true;
    while(all_zero){
      for(var i = 0; i < this.len; i++){
        let coefficient = Math.floor(Math.random() * (upper_bound - lower_bound + 1) + lower_bound)
        this.coefficients.push(coefficient);
        all_zero = all_zero && (coefficient == 0);
      }
    }
  }

  // Print the constraint
  print(){
    var str = "";

    str += print_linear_combination(this.coefficients, this.variable_indices);

    switch (this.inequality){
      case 0:
        str += " & \\leq " + this.constant;
        break;
      case 1:
        str += " & \\geq " + this.constant;
        break;
      case 2:
        str += " & = " + this.constant;
        break;
      case 3:
        str += " & < " + this.constant;
        break;
      case 4:
        str += " & > " + this.constant;
        break;
    }
    return str;
  }
}
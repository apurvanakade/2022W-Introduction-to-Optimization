import print_linear_combination from './print_linear_combination.js';

export default class ObjectiveFunction {
  constructor(len, coefficients, is_maximizing, variable_indices){
    this.len = len;
    this.coefficients = coefficients;
    this.is_maximizing = is_maximizing;
    this.variable_indices = variable_indices;
    if(len != undefined && variable_indices == undefined)
      this.variable_indices = [...Array(this.len).keys()]; 
    else 
      this.variable_indices = variable_indices;
  }

  // Randomly populate the objective function
  randomize(len, upper_bound = 10, lower_bound = -10){
    if (this.len == undefined){
      if(len == undefined)
        this.len = Math.floor(Math.random() * 10) + 1;
      else 
        this.len = len;
    }

    this.coefficients = [];
    let all_zero = true;
    while(all_zero){
      for(var i = 0; i < this.len; i++){
        let coefficient = Math.floor(Math.random() * (upper_bound - lower_bound + 1) + lower_bound)
        this.coefficients.push(coefficient);
        all_zero = all_zero && (coefficient == 0);
      }
    }
  }

  // Print the objective function
  print(){
    return print_linear_combination(this.coefficients, this.variable_indices);
  }
}
import print_linear_combination from './print_linear_combination.js';

export default class ObjectiveFunction {
  constructor(coefficients, is_maximizing, variable_names){
    this.coefficients = coefficients;
    this.is_maximizing = is_maximizing;
    this.variable_names = variable_names;
    
    if (coefficients != undefined && variable_names == undefined){
      this.variable_names = []
      for(let i = 0; i < this.coefficients.length; i++)
        this.variable_names.push('x_{' + (i + 1) + '}');
    }
  }

  // Randomly populate the objective function
  randomize(len, upper_bound = 10, lower_bound = -10){
    if(len == undefined)
      len = Math.floor(Math.random() * 10) + 1;

    this.coefficients = [];
    let all_zero = true;
    while(all_zero){
      for(let i = 0; i < len; i++){
        let coefficient = Math.floor(Math.random() * (upper_bound - lower_bound + 1) + lower_bound)
        this.coefficients.push(coefficient);
        all_zero = all_zero && (coefficient == 0);
      }
    }

    this.variable_names = []
    for(let i = 0; i < this.coefficients.length; i++)
      this.variable_names.push('x_{' + (i + 1) + '}');
  }

  // Print the objective function
  print(){
    return print_linear_combination(this.coefficients, this.variable_names);
  }
}

export{ObjectiveFunction};
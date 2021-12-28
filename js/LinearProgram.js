import { ObjectiveFunction } from './ObjectiveFunction.js';
import { Constraint } from './Constraint.js';

export default class LinearProgram {
  constructor(constraints, objective_function, is_maximizing){
    this.constraints = constraints;
    this.objective_function = objective_function;
    this.is_maximizing = is_maximizing;
  }

  // Randomly populate the linear program
  randomize(num_constraints, num_variables, is_maximizing, upper_bound = 10, lower_bound = -10){
    if(num_constraints == undefined)
      num_constraints = Math.floor(Math.random() * 5) + 1;
    
    if(num_variables == undefined)
      num_variables = Math.floor(Math.random() * 5) + 1;
    
    if(is_maximizing == undefined)
      this.is_maximizing = Math.random() >= 0.5;
    
    if(this.objective_function == undefined){
      this.objective_function = new ObjectiveFunction(num_variables);
      this.objective_function.randomize(num_variables, upper_bound, lower_bound);
    }

    if(this.constraints == undefined){
      this.constraints = [];
      for (var i = 0; i < num_constraints; i++) {
        this.constraints.push(new Constraint(num_variables));
        this.constraints[i].randomize(num_variables, upper_bound, lower_bound);
      }
    }
  }

  // Print the linear program
  print(){
    var str = "\\begin{aligned} \n";
    str += this.is_maximizing ? "\\mbox{maximize: } && " : "\\mbox{minimize: } && ";
    str += this.objective_function.print() + " \\\\ \n \\mbox{subject to: }";
    for(var i = 0; i < this.constraints.length; i++){
      str += " && " + this.constraints[i].print() + " \\\\ \n";
    }
    str += "\\end{aligned}";
    return str;
  }
}

export { LinearProgram, ObjectiveFunction, Constraint };
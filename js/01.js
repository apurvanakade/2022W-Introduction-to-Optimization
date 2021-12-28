import LinearProgram from "./LinearProgram.js";
import Constraint from "./Constraint.js";
import ObjectiveFunction from "./ObjectiveFunction.js";
import print_math from "./print_math.js";

//

var ob1 = new ObjectiveFunction([1]);
var constraint1 = new Constraint([1], "<", 1)
var constraint2 = new Constraint([1], "\\geq", 0)
var lp1 = new LinearProgram([constraint1, constraint2], ob1, true);
print_math("js-generated-open-constraint", lp1);

// 

print_math("js-generated-lp-intro", (new LinearProgram()));

// 
const ob2 = new ObjectiveFunction([0.1, 0.07]);
print_math("js-generated-resource-allocation-optimization-function", ob2);
const constraint3 = new Constraint([100, 75], "\\leq", 1000);
print_math("js-generated-resource-allocation-cost-constraint", constraint3);
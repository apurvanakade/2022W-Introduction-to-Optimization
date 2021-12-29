new_linear_combination <- function(coefficients = double(), variable_names = character()) {
  if(missing(variable_names)){
    variable_names = paste("x", seq_along(coefficients), sep = "_")
  }
  structure(list(coefficients = coefficients, variable_names = variable_names), class = "linear_combination")
}

str.linear_combination <- function(x) {
  paste(paste(x$coefficients, x$variable_names, sep = " "), collapse = " + ")
}

# 

new_constraint <- function(LHS = linear_combination(), inequality = character(), RHS = double()) {
  structure(list(LHS = LHS, inequality = inequality, RHS = RHS), class = "constraint")
}

str.constraint <- function(x) {
  paste(str(x$LHS), "&", x$inequality, x$RHS, sep = " ")
}

# 

new_linear_program <- function(objective = linear_combination(), constraints = list(), maximize = TRUE) {
  structure(list(objective = objective, constraints = constraints, maximize = maximize), class = "linear_program_general")
}

str.linear_program_general <- function(x) {
  if (x$maximize) {
    paste("\\mbox{maximize: }&& ", str(x$objective), " & \\\\ \n \\mbox{subject to: } && ", paste(lapply(x$constraints, str), collapse = " \\\\ \n && "), sep = "")
  } else {
    paste("\\mbox{maximize: }&& ", str(x$objective), " \\\\ \n \\mbox{subject to: } && ", paste(lapply(x$constraints, str), collapse = " \\\\ \n && "), sep = "")
  }
}

# 

str_math <- function(math, inline = FALSE) {
  if(inline) {
    paste("$", str(math), "$", sep = "")
  } else {
    paste("\\begin{align*}", str(math), "\\end{align*}", sep = "\n")
  }
}
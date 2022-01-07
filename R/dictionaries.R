new_dictionary <- function(
  objective = list(), 
  coefficients = matrix(), 
  constants = list(),
  non_basic_variables = list(), 
  basic_variables = list()) {
  structure(list(objective = round(objective, digits = 4), 
      coefficients = round(coefficients, digits = 4), 
      constants = round(constants, digits = 4),
      basic_variables = basic_variables,
      non_basic_variables = non_basic_variables), 
    class = "dictionary")
  }

str.dictionary <- function(x) {
  # print objective
  objective <- paste0("\\mbox{maximize: } & \\zeta &=&", x$objective[[1]], "& + &", paste0(x$objective[2:length(x$objective)], x$basic_variables, collapse = " &+& "), " \\\\ \n")

  # combine coefficients and variables
  coefficients <- 
    apply(t(matrix(paste0(t(x$coefficients), x$basic_variables), 
      nrow = length(x$constants))), 1, paste0, collapse = " & + &")

  # print constraints
  constraints <- paste0("\\mbox{subject to: }", 
    paste0(" & ", x$non_basic_variables, " & = & ", x$constants, " & - &", coefficients, " \\\\ \n", collapse = ""), 
    collapse = "")
  
  paste0("\\begin{array}{rrrr",paste(replicate(length(x$basic_variables), "rr"), collapse=""),"}\n", objective, constraints, "\\end{array}\n")
}

str_math <- function(math, inline = FALSE) {
  if (inline) {
    paste("$", str(math), "$", sep = "")
  } else {
    paste0("\\begin{equation} \n", str(math), "\\end{equation}\n")
  }
}
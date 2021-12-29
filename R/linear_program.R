new_linear_program <- function(objective = list(), A = list(), b = list(), variable_names = list()) {
  structure(list(objective = objective, A = A, b = b, variable_names = variable_names), class = "linear_program")
}

str.linear_program <- function(x) {
  paste(
    apply(
      cbind(" && ", 
        apply(matrix(paste0(x$A, x$variable_names), nrow = length(x$b)),1,paste,collapse=" + "), 
        " & <=", x$b, " \\"), 
      1, paste, collapse = ""), 
    collapse = " ")
}

test <- new_linear_program(objective = c(1, 2, 3), A = matrix(c(1, 2, 3, 4, 5, 6), nrow = 2), b = c(7, 8), variable_names = c("x", "y", "z"))
print(str(test))
new_linear_program <- function(obj = list(), A = list(),
  b = list(), variables = list()) {
  if (missing(variables)) {
    variables <- paste("x", seq_along(obj), sep = "_")
  }
  structure(
    list(obj = obj, A = A, b = b,
      variables = variables),
    class = "linear_program")
}

str.linear_program <- function(x) {
  paste0(paste0("\\mbox{maximize: } && ",
    paste0(x$obj, x$variables, collapse = " + "),
    " & \\\\ \n\\mbox{subject to: }",
    paste0(" && ", apply(
      matrix(paste0(t(x$A), x$variables), nrow = length(x$b), byrow = TRUE), 1, paste,
      collapse = " + "
    ), " & \\le ", x$b, " \\\\ \n", collapse = ""),
    collapse = " "
  ), " && ", paste(x$variables, collapse = ", "), " & \\ge 0")
}

str_math <- function(math, inline = FALSE) {
  if (inline) {
    paste("$", str(math), "$", sep = "")
  } else {
    paste0("\\begin{align*} \n", str(math), "\\end{align*}")
  }
}
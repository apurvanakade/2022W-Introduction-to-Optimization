new_tableau <- function(obj_val = float(), obj_coeffs = list(), coefficients = matrix(), constants = list(), basic = list()) {
  structure(list(
      obj_val = obj_val, 
      obj_coeffs = obj_coeffs, 
      coefficients = coefficients, 
      constants = constants,
      basic = basic),
    class = "tableau")
  }

str.tableau <- function(x) {
  # coefficients
  start <- paste0("\\begin{array}{", paste(replicate(2*length(x$obj_coeffs) - 1, "c"), collapse = ""), "|c} \n")

  # objective 
  objective <- paste0(paste(x$obj_coeffs, collapse = " & + & "), " & ", x$obj_val, "\\\\ \\hline \n")

  # coefficients
  coefficients <- paste(apply(x$coefficients, 1, paste0, collapse = " & + & "), x$constants, sep = " & ", collapse = " \\\\ \n")

  array <- paste0(start, objective, coefficients, " \n\\end{array} \\\\[10pt] \n", sep = "")

  basic <- paste0("\\mathcal{B} = \\{", paste(x$basic, collapse = ", "), "\\} \n")

  paste0(array, basic)
}
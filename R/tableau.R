new_tableau <- function(
  zeta = float(),
  c = list(),
  A = matrix(),
  b = list(),
  basic_var = list(),
  augement = TRUE) {
    if (augement) {
      A <- cbind(A, diag(nrow(A)))
      c <- c(c, rep(0, nrow(A)))
    }
  structure(
    list(
      zeta = zeta,
      data = cbind(rbind(A,-c), c(b, zeta)),
      basic_var = basic_var),
    class = "tableau")
}

str.tableau <- function(x) {
  # coefficients
  start <- paste0(
    "\\begin{array}{",
    paste(replicate(2 * length(x$c) - 1, "c"), collapse = ""),
    "|c} \n")

  # objective
  objective <- paste0(
    paste(x$c, collapse = " & + & "),
    " & ",
    x$zeta,
    "\\\\ \\hline \n")

  # matrix coefficients
  coeffs <- paste(
    apply(x$A, 1, paste0, collapse = " & + & "),
      x$b,
      sep = " & ",
      collapse = " \\\\ \n")

  array <- paste0(start, objective, coeffs, " \n\\end{array} \\\\[10pt] \n",
    sep = "")

  basic_var <- paste0("\\mathcal{B} = \\{", paste(x$basic_var, collapse = ", "),
    "\\} \n")

  paste0(array, basic_var)
}

pivot <- function(tableau, row, col) {
  # init row operation matrix as identity
  row_operation <- diag(nrow(tableau$data))

  # scale the pivot row
  row_operation[row, row] <- 1 / tableau$data[row, col]

  # subtract the pivot row from the other rows
  for (i in seq_len(nrow(tableau$data))) {
    if (i != row) {
      row_operation[i, row] <- -tableau$data[i, col] / tableau$data[row, col]
    }
  }

  # apply row operation to the matrix
  tableau$data <- row_operation %*% tableau$data
  tableau
}

x <- new_tableau(
  zeta = 0,
  c = c(1, 1.5),
  A = matrix(c(1, 2, 4, 3), nrow = 2, byrow = TRUE),
  b = c(10, 20))

# print(x$A)

print(x$data)
x <- pivot(x, 2, 1)
print(x$data)
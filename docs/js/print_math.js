export default function print_math(DOM_element_id, math_object, inline = false){
  document.getElementById(DOM_element_id).innerHTML = "\\begin{align}" + math_object.print() + "\\end{align}";
  MathJax.Hub.Queue(["Typeset",MathJax.Hub,DOM_element_id]);
}
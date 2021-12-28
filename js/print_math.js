export default function print_math(DOM_element_id, math_object, inline = false){
  if (inline)
    document.getElementById(DOM_element_id).innerHTML = "$" + math_object.print() + "$";
  else
    document.getElementById(DOM_element_id).innerHTML = "\\begin{align}" + math_object.print() + "\\end{align}";
  MathJax.Hub.Queue(["Typeset",MathJax.Hub, DOM_element_id]);
}
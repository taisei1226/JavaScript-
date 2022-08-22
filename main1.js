const result = document.getElementById("result");
function edit(value) {
  result.value = result.value + value;
}
function calc() {
  result.value = new Function(
    "return " + result.value
  )();
}
function reset() {
  result.value = "";
}
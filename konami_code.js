const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];
function codecheck(e) {
  let index = 0;
  const key = e.key;
  if (key === codes[index]) {
    index++;
    if (index === codes.length) {
      alert("Congratulations!");
    }
  }
  else {
    index = 0;
  }
}
function init() {
  document.body.addEventListener("keydown",codecheck);
}

function helloName(name) {
  alert(`Hello ${name}!`);
}

function writeID(id) {
  alert(`${id} ID check!`);
}

helloName("GDG on Campus Sogang");

const inputText = document.getElementById("helloName");
const helloBtn = document.getElementById("helloBtn");

const idInput = document.getElementById("writeID"); // ID 입력 필드의 ID를 수정해 주세요
const idCheck = document.getElementById("idCheck");

helloBtn.addEventListener("click", () => {
  helloName(inputText.value);
});

idCheck.addEventListener("click", () => {
  writeID(idInput.value);
});

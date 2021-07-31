const toggleBtn = document.getElementById("toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  if (body.className == "") {
    body.className = "theme-2";
  } else if (body.className == "theme-2") {
    body.className = "theme-3";
  } else if (body.className == "theme-3") {
    body.className = "";
  }
});

const buttons = document.querySelectorAll(".keypad button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let btnVal = button.value;
    btnVal === "reset" || btnVal === "del" ? resetDel(btnVal) : compute(btnVal);
  });
});

function resetDel(arg) {
  const input = document.getElementById("input");
  let str = input.textContent;
  arg === "reset"
    ? (input.textContent = "")
    : (input.textContent = str.slice(0, -1));
}

function compute(arg) {
  const input = document.getElementById("input");
  let val = input.textContent;
  arg === "equals"
    ? (input.textContent = eval(val))
    : (input.textContent += arg);
}

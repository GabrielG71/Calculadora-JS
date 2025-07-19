document.addEventListener("DOMContentLoaded", () => {
  let display = document.getElementById("display");

  let btn = document.querySelectorAll(".btn");

  btn.forEach((button) => {
    let valor = button.textContent;

    button.addEventListener("click", () => {
      if (button.classList.contains("btn-clear")) {
        display.value = "";
      } else if (button.classList.contains("btn-del")) {
        display.value = display.value.slice(0, -1);
      } else if (button.classList.contains("btn-equal")) {
        try {
          const exp = display.value.replace(/X/g, "*");
          display.value = eval(exp);
        } catch (error) {
          display.value = "Erro";
        }
      } else {
        display.value += valor;
      }
    });
  });
  document.addEventListener("keydown", (e) => {
    const key = e.key;

    if (!isNaN(key) || "+-*/().".includes(key)) {
      e.preventDefault();
      display.value += key;
    } else if (key == "Enter") {
      e.preventDefault();

      try {
        const exp = display.value.replace(/X/g, "*");
        display.value = eval(exp);
      } catch (error) {
        display.value = "Erro";
      }
    } else if (key == "Backspace") {
      display.value = display.value.slice(0, -1);
    } else if (key == "Space") {
      display.value = "";
    }
  });
});

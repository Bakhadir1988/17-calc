"use strict";

const calculate = (operator) => {
  const inputs = document.querySelectorAll(".input");
  const panel = document.querySelector(".panel");
  const a = Number(inputs[0].value);
  const b = Number(inputs[1].value);
  const result = operator(a, b);
  panel.textContent = `Результат = ${result}`;
  panel.style.display = "block";
  inputs[0].value = "";
  inputs[1].value = "";

  return result;
};

const addition = () => calculate((a, b) => a + b);
const subtraction = () => calculate((a, b) => a - b);
const multiplication = () => calculate((a, b) => a * b);
const division = () => calculate((a, b) => a / b);

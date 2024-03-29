import { users } from "./app.js";

export function disableInputs() {
  console.log(users)
  const inputDebtName = document.getElementById("debt-name");
  const inputDebtValue = document.getElementById("debt-value");
  const inputType = document.querySelectorAll('.debt-radio-selection input[type="radio"');
  const inputParcelas = document.getElementById("parcelas");
  const selectedProfile = document.querySelector("#selected-profile");
  
  if(users.length <= 0 || selectedProfile.hasAttribute("data-user") === false ){
    inputDebtName.setAttribute("disabled", "")
    inputDebtValue.setAttribute("disabled", "")
    inputType[0].setAttribute("disabled", "")
    inputType[1].setAttribute("disabled", "")
    inputParcelas.setAttribute("disabled", "")
  } else{
    inputDebtName.removeAttribute("disabled", "")
    inputDebtValue.removeAttribute("disabled", "")
    inputType[0].removeAttribute("disabled", "")
    inputType[1].removeAttribute("disabled", "")
    inputParcelas.removeAttribute("disabled", "")
  }

  // TODO fazer uma fuction que toda vez que o usuario clica em um input, faz com que apareça um toast notification avisando que ele precisa selecionar um perfil antes de cadastra um novo valor
}
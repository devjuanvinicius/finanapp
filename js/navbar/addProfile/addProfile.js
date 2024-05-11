import { monthlySpending, users } from "../../app.js";
import { showProfileInNav } from "../showProfileInNav.js";
import { closeDialog, deleteErrorMessage } from "./showDialog.js";

export function addProfile(event) {
  event.preventDefault();

  const userName = document.getElementById("new-user").value;
  const salary = document.getElementById("user-salary").value;
  const salaryInput = document.getElementById("user-salary");
  const verifyUserInArray = users.indexOf(userName);

  const usersData = {
    user: userName,
    salary: salary,
    gastos: [],
    gastoMensal: 0,
    gastoFixo: 0,
    gastoParcelamento: 0,
  };

  deleteErrorMessage();

  if (verifyUserInArray !== -1) {
    const errorMessage = document.createElement("span");
    errorMessage.innerText = "Usuario já existente";
    errorMessage.style.color = "#832021";

    salaryInput.insertAdjacentElement("afterend", errorMessage)
  } else if (userName.length <= 0 || salary.length <= 0) {
    const errorMessage = document.createElement("span");
    errorMessage.innerText = "Por favor, preencha tanto o seu nome quanto o seu salário antes de prosseguir.";
    errorMessage.style.color = "#832021";

    salaryInput.insertAdjacentElement("afterend", errorMessage)
  } else {
    users.push(userName);
    monthlySpending.push(usersData);

    console.table(monthlySpending)

    closeDialog();
    showProfileInNav();
  }
}

import { monthlySpending, users } from "../../app.js";
import { showProfileInNav } from "../showProfileInNav.js";
import { closeDialog, deleteErrorMessage } from "../../dialogControls.js";

export function addProfile() {
  const navElement = document.querySelector("nav");
  const userName = document.getElementById("new-user").value;
  const salary = document.getElementById("user-salary").value;
  const salaryInput = document.getElementById("user-salary");
  const verifyUserInArray = users.indexOf(userName);
  const registerNewUserForm = document.getElementById("form-new-user");
  const registerNewUserDialog = document.getElementById("register-new-user"); 
  //* ^ No editor, ele aparece que o valor nunca é lido, mas o código antes dele cria o dialog, desta forma, ele le sim.

  const usersData = {
    user: userName,
    salary: salary,
    gastos: [],
    gastoMensal: 0,
    gastoFixo: 0,
    gastoParcelamento: 0,
    gastoParcelamentoMes: 0
  };

  deleteErrorMessage(registerNewUserForm);

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
   
    closeDialog(registerNewUserDialog);
    showProfileInNav();
    // saveUsersData();
  }
}

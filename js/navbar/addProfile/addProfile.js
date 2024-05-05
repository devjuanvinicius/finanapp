import { monthlySpending, users } from "../../app.js";
import { showProfileInNav } from "../showProfileInNav.js";
import { closeDialog, deleteErrorMessage } from "./showDialog.js";

export function addProfile(event) {
  event.preventDefault();

  const userName = document.getElementById("new-user").value;
  const salary = document.getElementById("user-salary").value;
  const verifyUserInArray = users.indexOf(userName);

  const usersData = {
    user: userName,
    salary: salary,
    gastos: [],
    gastoMensal: 0,
    gastoFixo: 0,
  };

  deleteErrorMessage();

  if (verifyUserInArray !== -1) {
    const errorMessage = document.createElement("span");
    errorMessage.innerText = "Usuario já existente";
    errorMessage.style.color = "#7f1d1d";

    registerNewUserForm.appendChild(errorMessage);
  } else {
    users.push(userName);
    monthlySpending.push(usersData);

    console.table(monthlySpending)

    closeDialog();
    showProfileInNav();
  }
}

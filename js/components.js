import { closeDialog } from "./dialogControls.js";
import { monthlySpending } from "./app.js";
import { moneyMask } from "./moneyMask.js";

export function createDialog(typeOrID) {
  const nav = document.querySelector("nav");

  const dialog = document.createElement("section");
  const dialogTitle = document.createElement("h2");
  const closeDialogIcon = document.createElement("img");
  const form = document.createElement("form");
  const labelUser = document.createElement("label");
  const labelSalary = document.createElement("label");
  const inputUser = document.createElement("input");
  const inputSalary = document.createElement("input");
  const inputSubmit = document.createElement("input");

  dialog.classList.add("dialogs");

  closeDialogIcon.src = "./assets/icons/x.svg";
  closeDialogIcon.id = "close-dialog";
  closeDialogIcon.classList.add("close-dialog");

  inputUser.type = inputSalary.type = "text";

  inputSubmit.type = "submit";
  inputSubmit.classList.add("btn", "btn-default");

  if (typeOrID === "register") {
    dialog.id = "register-new-user";

    dialogTitle.innerText = "Cadastre um novo usuario";

    form.id = "form-new-user";

    labelUser.htmlFor = "new-user";
    labelUser.innerText = "Digite o seu nome:";

    labelSalary.htmlFor = "user-salary";
    labelSalary.innerText = "Informe o quanto você ganha:";

    inputUser.id = "new-user";
    inputUser.placeholder = "Ricardo Martins";

    inputSalary.id = "user-salary";
    inputSalary.placeholder = "20000";

    inputSubmit.value = "Cadastrar";
  } else {
    dialog.id = "edit-user";

    dialogTitle.innerText = "Editar usuario";

    form.id = "form-edit-user";

    labelUser.htmlFor = "edit-user";
    labelUser.innerText = "Edite o seu nome:";

    labelSalary.htmlFor = "user-salary";
    labelSalary.innerText = "Edite o quanto você ganha:";

    inputUser.id = "edit-user";
    inputUser.value = monthlySpending[typeOrID].user;

    inputSalary.id = "user-salary";
    inputSalary.value = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 0
    }).format(monthlySpending[typeOrID].salary);

    inputSubmit.value = "Editar";
  }

  form.append(labelUser, inputUser, labelSalary, inputSalary, inputSubmit);
  dialog.append(dialogTitle, closeDialogIcon, form);
  nav.appendChild(dialog);

  inputSalary.addEventListener("input", () => {
    moneyMask(inputSalary);
  });

  closeDialogIcon.addEventListener("click", () => {
    closeDialog(dialog);
  });

  return dialog;
}

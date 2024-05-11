import { monthlySpending, clearInputs, typeOfDebtInputs, clearInputType } from "../app.js";
import { showValuesInScreen } from "../showValues.js";
import { debtSum } from "./debtSum.js";

export const findingId = (selectedUser) => {
  const foundUser = monthlySpending.find((user) => user.user === selectedUser);
  return monthlySpending.indexOf(foundUser);
};

export function registerNewDebt(event) {
  event.preventDefault();
  let installmentsValues = 0;

  const selectedProfile = document.getElementById("selected-profile").dataset.user;
  const inputDebtName = document.getElementById("debt-name").value;
  let inputDebtValue = document.getElementById("debt-value").value;
  const totalInstallments = document.getElementById("parcelas").value;
  let typeOfDebt = "noType";

  console.log(typeOfDebtInputs); // NENHUM CHECKED
  
  typeOfDebtInputs.forEach((input) => {
    console.log(typeOfDebtInputs); // NENHUM CHECKED
    if(input.checked === true){
      console.log(input);
      typeOfDebt = input.value
    }
  })
  
  console.log(typeOfDebt)
  
  if (typeOfDebt === "parcelado") {
    installmentsValues = inputDebtValue / totalInstallments;
    inputDebtValue = installmentsValues;
  }

  monthlySpending[findingId(selectedProfile)].gastos.push({
    name: inputDebtName,
    value: parseFloat(inputDebtValue),
    type: typeOfDebt, // parcelado ou fixo
    installments: totalInstallments, // total prestações
    installmentsValues: parseFloat(installmentsValues), // valor parcelado
  });

  console.log(monthlySpending)
  // debtSum();
  showValuesInScreen();
  clearInputs();
  clearInputType();
}

import { monthlySpending, clearInputs, typeOfDebtInputs, clearInputType } from "../app.js";
import { showPaymentsHistory } from "../paymentHandler/showPaymentsHistory.js";
import { showValuesInCard } from "../showValuesInCard.js";
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
  let inputDebtValue = VMasker.toNumber(document.getElementById("debt-value").value);
  const totalInstallments = isNaN(parseFloat(document.getElementById("parcelas").value)) ? 0 : parseFloat(document.getElementById("parcelas").value); 
  
  let typeOfDebt = "noType";

  typeOfDebtInputs.forEach((input) => { 
    // vai verificar se existe algum input checked, se sim vai atribuir o valor do input a variavel typeOfDebt
    if(input.checked === true){
      typeOfDebt = input.value
    }
  })
  
  if (typeOfDebt === "parcelado") {
    installmentsValues = inputDebtValue / totalInstallments;
  }

  monthlySpending[findingId(selectedProfile)].gastos.push({
    name: inputDebtName,
    value: parseFloat(inputDebtValue),
    type: typeOfDebt, 
    installments: totalInstallments, 
    installmentsValues: parseFloat(installmentsValues),
  });


  debtSum();
  showValuesInCard();
  showPaymentsHistory(findingId(selectedProfile));
  clearInputs();
  clearInputType();
}

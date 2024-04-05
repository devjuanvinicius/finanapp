import { monthlySpending, clearInputs } from "./app.js";

export function registerNewDebt() {
  const selectedProfile = document.getElementById("selected-profile");
  let inputValue;
  let installmentsValues;
  const inputDebtName = document.getElementById("debt-name").value;
  const inputDebtValue = document.getElementById("debt-value").value;
  const totalInstallments = document.getElementById("parcelas").value;

  document.querySelectorAll("input[name='type']").forEach((item) => {
    if (item.checked) {
      inputValue = item.value;
    }
  });

  const findUserId = () => {
    monthlySpending.findIndex((item) => {
      return item.user === selectedProfile.dataset.user;
    })
  }

  if (inputValue === "parcelado") {
    installmentsValues = inputDebtValue / totalInstallments;
    console.log(installmentsValues);
  }

  function calculateGastoMensal(){
    monthlySpending[findUserId].gastos.map((gasto) => {
      monthlySpending[findUserId].gastoMensal += gasto.value;
      console.log(monthlySpending[findUserId].gastoMensal);
    })
  }
  
  console.log(findUserId);

  if (findUserId === -1) {
    monthlySpending.push({
      user: selectedProfile.dataset.user,
      gastos: [
        {
          name: inputDebtName,
          value: inputDebtValue,
          type: inputValue, // parcelado ou fixo
          installments: totalInstallments, // total prestações
          installmentsValues: installmentsValues, // valor parcelado
        },
      ],
    });
    console.table(monthlySpending);
  } else {
    console.log(findUserId)
    monthlySpending[findUserId].gastos.push({
      name: inputDebtName,
      value: inputDebtValue,
      type: inputValue, // parcelado ou fixo
      installments: totalInstallments, // total prestações
      installmentsValues: installmentsValues, // valor parcelado
    });
  }

  findUserId();
  calculateGastoMensal();
  clearInputs();
}

//       gastos: [
//         {
//           name: inputDebtName,
//           value: inputDebtValue,
//           type: inputValue, // parcelado ou fixo
//           installments: totalInstallments, // total prestações
//           installmentsValues: installmentsValues, // valor parcelado
//         },
//       ],
//       gastoMensal: 0,
//       gastoFixo: 0,
//       cofrinho: 0,
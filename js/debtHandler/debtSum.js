import { monthlySpending, saveUsersData } from "../app.js";
import { findingId } from "./registerNewDebt.js";

export function debtSum() {
  const selectedProfile = document.getElementById("selected-profile").dataset.user;
  const userId = findingId(selectedProfile);

  let gastoMensalTotal = 0;
  let gastoFixo = 0;
  let gastoParcelado = 0;
  let gastoMensalParcelado = 0;
  let noType = 0;

  monthlySpending[userId].gastos.forEach((gasto) => {
    if (gasto.type === "parcelado") {
      gastoMensalParcelado += gasto.installmentsValues;
      gastoParcelado += gasto.value;
    } else if (gasto.type === "fixed") {
      gastoFixo += gasto.value;
    } else {
      noType += gasto.value;
    }
  });

  gastoMensalTotal = gastoFixo + noType + gastoMensalParcelado;

  monthlySpending[userId].gastoMensal = gastoMensalTotal;
  monthlySpending[userId].gastoFixo = gastoFixo;
  monthlySpending[userId].gastoParcelamento = gastoParcelado;
  monthlySpending[userId].gastoParcelamentoMes = gastoMensalParcelado;

  saveUsersData();
}

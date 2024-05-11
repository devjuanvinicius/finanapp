import { monthlySpending } from "../app.js";
import { findingId } from "./registerNewDebt.js";

export function debtSum() {
  const selectedProfile = document.getElementById("selected-profile").dataset.user;
  let gastoMensalTotal = 0;
  let gastoMensalParcelado = 0;

  console.log(findingId(selectedProfile));

  monthlySpending[findingId(selectedProfile)].gastos.forEach((gasto) => {
    gastoMensalTotal += gasto.value;
    return gastoMensalTotal;
  });

  monthlySpending[findingId(selectedProfile)].gastos.forEach((gasto) => {
    gastoMensalParcelado += gasto.installmentsValues;
    return gastoMensalParcelado;
  });

  monthlySpending[findingId(selectedProfile)].gastoMensal = gastoMensalTotal;
  monthlySpending[findingId(selectedProfile)].gastoParcelamento = gastoMensalParcelado;
}
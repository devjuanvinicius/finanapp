import { monthlySpending } from "../app.js";
import { findingId } from "./registerNewDebt.js";

export function debtSum() {
  const selectedProfile = document.getElementById("selected-profile");
  let gastoMensalTotal = 0;

  monthlySpending[findingId(selectedProfile)].gastos.forEach((gasto) => {
    gastoMensalTotal += gasto.value;
    console.log(gastoMensalTotal);
    return gastoMensalTotal;
  });

  console.log(gastoMensalTotal);
}
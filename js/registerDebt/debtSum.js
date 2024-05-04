import { monthlySpending } from "../app.js";
import { findingId } from "./findingId.js";
import { selectedProfile } from "./registerNewDebt.js";

export function debtSum() {
  let gastoMensalTotal = 0;
  let userId = findingId(selectedProfile);
  
  monthlySpending[findingId(userId)].gastos.forEach((gasto) => {
    gastoMensalTotal += gasto.value;
    console.log(gastoMensalTotal);
    return gastoMensalTotal;
  });

  console.log(gastoMensalTotal);
}
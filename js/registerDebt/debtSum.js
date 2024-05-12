import { monthlySpending } from "../app.js";
import { findingId } from "./registerNewDebt.js";

export function debtSum() {
  const selectedProfile = document.getElementById("selected-profile").dataset.user;

  let gastoMensalTotal = 0;
  let gastoFixo = 0;
  let gastoParcelado = 0;
  let gastoMensalParcelado = 0;
  let noType = 0;

  let { gastoMensal } = monthlySpending[findingId(selectedProfile)]

  monthlySpending[findingId(selectedProfile)].gastos.forEach((gasto) => {
    if(gasto.type === "parcelado"){
      gastoMensalParcelado += gasto.installmentsValues;
      gastoParcelado += gasto.value;
      gastoMensalTotal = gastoMensal + gastoMensalParcelado;
    } else if(gasto.type === "fixed"){
      gastoFixo += gasto.value;      
      gastoMensalTotal = gastoMensal + gastoFixo;
    } else{
      noType += gasto.value;
      gastoMensalTotal = gastoMensal + noType;
    }
  });

  monthlySpending[findingId(selectedProfile)].gastoMensal = gastoMensalTotal;
  monthlySpending[findingId(selectedProfile)].gastoFixo = gastoFixo;
  monthlySpending[findingId(selectedProfile)].gastoParcelamento = gastoParcelado;
  monthlySpending[findingId(selectedProfile)].gastoParcelamentoMes = gastoMensalParcelado;
}
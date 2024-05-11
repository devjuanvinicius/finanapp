import { monthlySpending } from "./app.js";
import { findingId } from "./registerDebt/registerNewDebt.js";

export function showValuesInScreen() {
  function numberFormater(numberToFormat) {
    return Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(numberToFormat);
  }

  const selectedProfile = document.getElementById("selected-profile").dataset.user;

  // console.log(monthlySpending[findingId(selectedProfile)].gastoMensal)
  // console.log(monthlySpending[findingId(selectedProfile)].gastoParcelamento)

  const gastoMensal = numberFormater(monthlySpending[findingId(selectedProfile)].gastoMensal);
  const gastoFixo = numberFormater(monthlySpending[findingId(selectedProfile)].gastoFixo)
  const gastoParcelado = numberFormater(monthlySpending[findingId(selectedProfile)].gastoParcelamento)

  document.getElementById("gasto-mensal").innerText = gastoMensal;
  document.getElementById("gasto-parcelado").innerText = gastoParcelado;
}

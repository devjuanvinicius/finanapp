import { monthlySpending } from "./app.js";
import { findingId } from "./debtHandler/registerNewDebt.js";

export function numberFormater(numberToFormat) {
  return Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(numberToFormat);
}

export function showValuesInCard() {
  const selectedProfile = document.getElementById("selected-profile").dataset.user;

  const { salary, gastoMensal, gastoFixo, gastoParcelamento, gastoParcelamentoMes } = monthlySpending[findingId(selectedProfile)] 

  const gastoMensalFormated = numberFormater(gastoMensal);
  const gastoFixoFormated = numberFormater(gastoFixo);
  const gastoParceladoFormated = numberFormater(gastoParcelamento);
  const gastoParceladoMesFormated = numberFormater(gastoParcelamentoMes);
  const salaryFormated = numberFormater(salary)

  document.getElementById("renda").innerText = salaryFormated;
  document.getElementById("gasto-mensal").innerText = gastoMensalFormated;
  document.getElementById("gasto-fixo").innerText = gastoFixoFormated;
  document.getElementById("gasto-parcelado").innerText = gastoParceladoMesFormated;
  document.getElementById("gasto-total-parcelado").innerText = gastoParceladoFormated;  
}
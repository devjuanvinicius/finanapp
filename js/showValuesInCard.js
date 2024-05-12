import { monthlySpending } from "./app.js";
import { findingId } from "./registerDebt/registerNewDebt.js";

export function showValuesInCard() {
  function numberFormater(numberToFormat) {
    return Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(numberToFormat);
  }

  const selectedProfile = document.getElementById("selected-profile").dataset.user;

  const { salary, gastoMensal, gastoFixo, gastoParcelamento, gastoParcelamentoMes } = monthlySpending[findingId(selectedProfile)] 

  console.log(monthlySpending)

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
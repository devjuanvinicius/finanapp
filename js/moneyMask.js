export function moneyMask(input) {
  VMasker(input).maskMoney({
    precision: 0,
    delimiter: ".",
    unit: "R$",
  })
}
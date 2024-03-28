export function registerNewDebt() { 
  const inputDebtName = document.getElementById("debt-name");
  const inputDebtValue = document.getElementById("debt-value");

  const monthlySpending = [
    {
      user: "Juan",
      gastos: [
        {
          name: "faculdade",
          value: 340,
          type: "parcelado", // parcelado ou fixo
          installments: 0
        }
      ],
      gastoMensal: 0,
      gastoFixo: 0,
      cofrinho: 0
    }
  ];

  const findUser = monthlySpending.find((item) => {
    return item.user === selectedProfile.dataset.user;  
  })
 
  if(findUser){ // Se achar cai aqui
    findUser.gastos.push({
      name: inputDebtName.value,
      value: parseFloat(inputDebtValue.value)
    })

    let valorMensal = 0;

    findUser.gastos.forEach((debt) => {
      valorMensal += debt.value;
    })
    
    findUser.gastoMensal = valorMensal;

    console.log(monthlySpending);
    console.log(valorMensal);
  } else{
    console.log("naum")
  }
}
import { monthlySpending } from "../app.js";
import { selectedProfile } from "./registerNewDebt.js";

export function findingId() {
  const foundUser = monthlySpending.find((item) => {
    if (item.user === selectedProfile.dataset.user) {
      return true; 
    }
    return false; 
  });

  if (foundUser !== undefined) {
    return monthlySpending.indexOf(foundUser); 
  } else {
    return -1; 
  }
}

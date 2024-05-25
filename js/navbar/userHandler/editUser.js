import { monthlySpending, users } from "../../app.js";

export function editUser(userID, { target }) {
  console.log(monthlySpending[userID])

  users[userID] = target[0].value;
  monthlySpending[userID].user = target[0].value;
  monthlySpending[userID].salary = target[1].value;
}
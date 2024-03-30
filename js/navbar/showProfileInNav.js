import { users } from "../app.js";

export function showProfileInNav() {
  const profileList = document.getElementById("list-profiles");

  profileList.innerHTML = "";
  users.map((user) => {
    const userItem = document.createElement("li");
    const iconCheck = document.createElement("img");

    userItem.innerText = user;
    userItem.dataset.user = user;
    userItem.classList.add("profile");
    iconCheck.setAttribute("src", "./assets/icons/check.svg");

    userItem.appendChild(iconCheck);
    profileList.appendChild(userItem);
  });
}
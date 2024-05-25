import { users } from "../app.js";
import { closeDialog, openDialog } from "../dialogControls.js";
import { editUser } from "./userHandler/editUser.js";
import { navbarProfiles } from "./usernameInNav.js";

export function showProfileInNav() {
  const profileList = document.getElementById("list-profiles");

  profileList.innerHTML = "";

  users.map((user, index) => {
    const userItem = document.createElement("li");
    const iconEdit = document.createElement("img");

    userItem.innerText = user;
    userItem.dataset.user = user;
    userItem.classList.add("profile");

    iconEdit.setAttribute("src", "./assets/icons/pencil-line.svg");

    userItem.appendChild(iconEdit);
    profileList.appendChild(userItem);

    iconEdit.addEventListener("click", () => {
      const dialog = openDialog(index);

      dialog.addEventListener("submit", (event) => { 
        event.preventDefault();
        editUser(index, event);
        showProfileInNav();
        navbarProfiles(); // novo
        closeDialog(dialog);
      })
    });
  });
}

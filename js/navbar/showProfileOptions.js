import { disableInputs } from "../disableInputs.js";
import { showValuesInCard } from "../showValuesInCard.js";

export function showProfileOptions() {
  const selectContent = document.getElementById("profile-options");
  const selectValue = document.querySelector(".current-profile span");
  const selectItem = document.querySelectorAll("li");
  const selectProfile = document.getElementById("select-profile");

  selectContent.classList.toggle("active");
  selectProfile.classList.toggle("selected-profile-clicked");

  selectValue.innerText = "Adicionar novo perfil";

  if(selectValue.dataset.user){
    selectValue.innerText = selectValue.dataset.user;
  }

  selectItem.forEach((profile) => {
    profile.addEventListener("click", () => {
      selectValue.innerHTML = "";
      selectValue.innerText = profile.innerText;
      selectValue.dataset.user = profile.dataset.user;

      selectContent.classList.remove("active");
      selectProfile.classList.remove("selected-profile-clicked");

      selectItem.forEach((profile) => {
        profile.classList.remove("selected-profile");
      });

      profile.classList.add("selected-profile");
      disableInputs();
      showValuesInCard();
    });
  });
}
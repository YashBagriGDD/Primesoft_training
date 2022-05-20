"use strict";

window.onload = function () {
  //Initialize forms
  let forms = document.querySelectorAll(".needs-validation");

  Array.prototype.slice.call(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (e) => {
        if (form.checkValidity() == false) {
          e.preventDefault();
          e.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });

  let sidbarButton = document.getElementById("sidebarButton");

  sidbarButton.addEventListener("click", () => {
    console.log("Pressed!");
  });
};

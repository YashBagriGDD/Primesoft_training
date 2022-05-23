"use strict";

window.onload = function () {
  //Initialize forms
  let forms = document.querySelectorAll(".needs-validation");

  Array.prototype.slice.call(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (e) => {
        if (!form.checkValidity()) {
          e.preventDefault();
          e.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });

  // let sidebarButton = document.getElementById("sidebarCollapse");

  // sidebarButton.addEventListener("click", () => {
  //   console.log("Pressed!");
  //   sidebarButton.classList.toggle("active");
  // });
};

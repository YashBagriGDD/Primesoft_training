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

  // const jsonData = require("../assets/Data.json");

  // https://stackoverflow.com/questions/51275730/populate-html-table-with-json-data
  //first add an event listener for page load
  // document.addEventListener("DOMContentLoaded", get_json_data, false); // get_json_data is the function name that will fire on page load

  // //this function is in the event listener and will execute on page load
  // function get_json_data() {
  //   // Relative URL of external json file
  //   var json_url = "../assets/Data.json";

  //   //Build the XMLHttpRequest (aka AJAX Request)
  //   xmlhttp = new XMLHttpRequest();
  //   xmlhttp.onreadystatechange = function () {
  //     if (this.readyState == 4 && this.status == 200) {
  //       //when a good response is given do this

  //       var data = JSON.parse(this.responseText); // convert the response to a json object
  //       append_json(data); // pass the json object to the append_json function
  //     }
  //   };
  //   //set the request destination and type
  //   xmlhttp.open("POST", json_url, true);
  //   //set required headers for the request
  //   xmlhttp.setRequestHeader(
  //     "Content-type",
  //     "application/x-www-form-urlencoded"
  //   );
  //   // send the request
  //   xmlhttp.send(); // when the request completes it will execute the code in onreadystatechange section
  // }

  // //this function appends the json data to the table 'gable'
  // function append_json(data) {
  //   var table = document.getElementById("tableBody");
  //   data.forEach(function (object) {
  //     var tr = document.createElement("tr");
  //     tr.innerHTML =
  //       "<td>" +
  //       object.firstName +
  //       "</td>" +
  //       "<td>" +
  //       object.lastName +
  //       "</td>" +
  //       "<td>" +
  //       object.age +
  //       "</td>" +
  //       "<td>" +
  //       object.height +
  //       "</td>" +
  //       "<td>" +
  //       object.weight +
  //       "</td>";
  //     table.appendChild(tr);
  //   });
  // }
};

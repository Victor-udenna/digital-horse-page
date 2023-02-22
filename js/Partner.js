let Button = document.querySelector(".submit_button");
let firstName = document.getElementById("first_name");
let lastName = document.getElementById("last_name");
let email = document.getElementById("mail");
let PhoneNumber = document.getElementById("phone");
let vehicleBrand = document.getElementById("vehicle_brand");
let companyName = document.getElementById("company_name");
let vehicle_no = document.getElementById("vehicle_no");

let FirstnameAstheric = document.querySelector(".name_astheric");
let LastnameAstheric = document.querySelector(".Last_nameastheric");
let PhoneAstheric = document.querySelector(".phoneAstheric");
let EmailAstheric = document.querySelector(".emailAstheric");
let companyAstheric = document.querySelector(".companyAstheric");
let vehicleBrandAstheric = document.querySelector(".vehiclebrandAstheric");
let Vehicle_noAstheric = document.querySelector(".vehicle_noAstheric");

let Success_modal = document.querySelector("#success_modal_container");
let error_Modal = document.getElementById("error_modal_container");
let close_errorModal = document.querySelector(".error_button");

close_errorModal.addEventListener('click', ()=>{
  error_Modal.style.display = "none";
})



function asterikColor(element, asteriskName) {
  element.addEventListener("input", function () {
    if (element.value.length > 2) {
      asteriskName.style.color = "#00FF00";
    } else {
      asteriskName.style.color = "#FF0000";
    }
  });
}

// Name validation
asterikColor(firstName, FirstnameAstheric);
asterikColor(lastName, LastnameAstheric);
//companyName
asterikColor(companyName, companyAstheric);
// Vehicke brand
asterikColor(vehicleBrand, vehicleBrandAstheric);
// Phone number validation
PhoneNumber.addEventListener("input", (e) => {
  e.target.value = e.target.value.replace(/[^\d]/g, "").trim();
  if (PhoneNumber.value.length === 11 || PhoneNumber.value.length === 13) {
    PhoneAstheric.style.color = "#00FF00";
  } else {
    PhoneAstheric.style.color = "#FF0000";
  }
});
// Email validation
email.addEventListener("input", () => {
  if (email.value.length > 3 && email.value.includes("@")) {
    EmailAstheric.style.color = "#00FF00";
  } else {
    EmailAstheric.style.color = "#FF0000";
  }
});

vehicle_no.addEventListener("input", function () {
  if (vehicle_no.value > 0) {
    Vehicle_noAstheric.style.color = "#00FF00";
  } else {
    Vehicle_noAstheric.style.color = "#FF0000";
  }
});

const displayModal = (element) => {
  element.style.display = "block";
};

const SubmitDetails = (e) => {
  e.preventDefault();
  if (
    (firstName.value.length > 2 &&
      lastName.value.length > 2 &&
      PhoneNumber.value.length === 11) ||
    PhoneNumber.value.length === 13
  ) {
    if (
      companyName.value.length > 2 &&
      email.value.length > 3 &&
      email.value.includes("@") &&
      vehicleBrand.value.length > 2 &&
      vehicle_no.value > 0
    ) {
      displayModal(Success_modal);
    } else {
      displayModal(error_Modal)
    }
  } else {
    displayModal(error_Modal)
  }
};
Button.addEventListener("click", SubmitDetails);
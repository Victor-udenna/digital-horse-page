let Button = document.querySelector(".submit_button");
let firstName = document.getElementById("first_name");
let lastName = document.getElementById("last_name");
let email = document.getElementById("mail");
let PhoneNumber = document.getElementById("phone");
let vehicleBrand = document.getElementById("vehicle_brand");
let companyName = document.getElementById("company_name");
let Hiace = document.getElementById("hiace");
let Coaster = document.getElementById("coaster");
let FirstnameAstheric = document.querySelector(".name_astheric");
let LastnameAstheric = document.querySelector(".Last_nameastheric");
let PhoneAstheric = document.querySelector(".phoneAstheric");
let EmailAstheric = document.querySelector(".emailAstheric");
let companyAstheric = document.querySelector(".companyAstheric");
let vehicleBrandAstheric = document.querySelector(".vehiclebrandAstheric");
let VehicleAstheric = document.querySelector(".VehicleAstheric");


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
  e.target.value = e.target.value
    .replace(/[^\d]/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();
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

// Bus brand validation
Hiace.addEventListener("input", () => {
  if (Hiace.value > 0) {
    VehicleAstheric.style.color = "#00FF00";
  } else {
    VehicleAstheric.style.color = "#FF0000";
  }
});

Coaster.addEventListener("input", () => {
  if (Coaster.value > 0) {
    VehicleAstheric.style.color = "#00FF00";
  } else {
    VehicleAstheric.style.color = "#FF0000";
  }
});

// const SubmitDetails =(e)=>{
//     e.preventDefault()
//     console.log(email.value);
//     console.log(firstName.value);
//     console.log(lastName.value);
//     console.log(vehicleBrand.value);
//     console.log(PhoneNumber.value);
//     console.log(companyName.value);
//     console.log(Hiace.value + " " + " Hiance bus");
//     console.log(Coaster.value + " " + " Coaster bus");
//     FirstnameAstheric.style.color = "blue";
//     EmailAstheric.style.color = "blue"
//     LastnameAstheric.style.color = "blue";
//     LastnameAstheric.style.color = "blue";
//     PhoneAstheric.style.color = 'blue';
//     VehicleAstheric.style.color = 'blue';

//     if (email.value.includes('@')){
//         console.log('it work')
//     }
// }
// Button.addEventListener("click", SubmitDetails);

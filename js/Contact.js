let Button = document.querySelector(".submit_button");
let firstName = document.getElementById("first_name");
let lastName = document.getElementById("last_name");
let PhoneNumber = document.getElementById("phone");
let email = document.getElementById("mail");
let subject = document.getElementById("subject");
let Message = document.getElementById("Message");

let FirstnameAstheric = document.querySelector(".firstName_astheric");
let LastnameAstheric = document.querySelector(".lastName_astheric");
let PhoneAstheric = document.querySelector(".phone_astheric");
let emailAstheric = document.querySelector(".email_astheric");
let subjectAstheric = document.querySelector(".subject_astheric");
let messageAstheric = document.querySelector(".message_astheric");

let modal = document.querySelector("#modal_container");

function asterikColor(element, asteriskName) {
  element.addEventListener("input", function () {
    if (element.value.length > 2) {
      asteriskName.style.color = "#00FF00";
    } else {
      asteriskName.style.color = "#FF0000";
    }
  });
}

asterikColor(firstName, FirstnameAstheric);
asterikColor(lastName, LastnameAstheric);
asterikColor(subject, subjectAstheric);
asterikColor(Message, messageAstheric);

PhoneNumber.addEventListener("input", (e) => {
  e.target.value = e.target.value.replace(/[^\d]/g, "").trim();
  if (PhoneNumber.value.length === 11 || PhoneNumber.value.length === 13) {
    PhoneAstheric.style.color = "#00FF00";
    console.log(PhoneNumber.value.length);
  } else {
    PhoneAstheric.style.color = "#FF0000";
  }
});
// Email validation
email.addEventListener("input", () => {
  if (email.value.length > 3 && email.value.includes("@")) {
    emailAstheric.style.color = "#00FF00";
  } else {
    emailAstheric.style.color = "#FF0000";
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
      email.value.length > 3 &&
      email.value.includes("@") &&
      subject.value.length > 2 &&
      Message.value.length > 1
    ) {
      displayModal(modal);
    } else {
      console.log("no condition 2");
    }
    console.log("yes condition 1");
  } else {
    console.log("no condition 1");
  }
};
Button.addEventListener("click", SubmitDetails);

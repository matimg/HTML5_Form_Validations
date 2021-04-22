/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import validator from "validator";

window.onload = function() {
  //Boton del evento
  var btn = document.getElementById("btn-submit");
  //Alerta
  var alert = document.getElementById("alert");

  btn.addEventListener("click", function(event) {
    event.preventDefault();
    //Elementos del form
    let card = document.getElementById("card");
    let cvc = document.getElementById("cvc");
    let amount = document.getElementById("amount");
    let name = document.getElementById("name");
    let lastname = document.getElementById("lastname");
    let city = document.getElementById("city");
    let state = document.getElementById("state");
    let postal = document.getElementById("postal");
    let message = document.getElementById("message");

    //Validaciones
    if (
      validator.isEmpty(card.value) ||
      validator.isEmpty(cvc.value) ||
      validator.isEmpty(amount.value) ||
      validator.isEmpty(name.value) ||
      validator.isEmpty(lastname.value) ||
      validator.isEmpty(city.value) ||
      validator.isEmpty(state.value) ||
      validator.isEmpty(postal.value) ||
      validator.isEmpty(message.value)
    ) {
      alert.style.display = "block";
    } else {
      alert.style.display = "none";
    }

    if (validator.isEmpty(card.value)) {
      card.classList.add("alert-danger");
    } else {
      card.classList.remove("alert-danger");
    }
    if (validator.isEmpty(cvc.value)) {
      cvc.classList.add("alert-danger");
    } else {
      cvc.classList.remove("alert-danger");
    }
    if (validator.isEmpty(amount.value)) {
      amount.classList.add("alert-danger");
    } else {
      amount.classList.remove("alert-danger");
    }
    if (validator.isEmpty(name.value)) {
      name.classList.add("alert-danger");
    } else {
      name.classList.remove("alert-danger");
    }
    if (validator.isEmpty(lastname.value)) {
      lastname.classList.add("alert-danger");
    } else {
      lastname.classList.remove("alert-danger");
    }
    if (validator.isEmpty(city.value)) {
      city.classList.add("alert-danger");
    } else {
      city.classList.remove("alert-danger");
    }
    if (validator.isEmpty(state.value)) {
      state.classList.add("alert-danger");
    } else {
      state.classList.remove("alert-danger");
    }
    if (validator.isEmpty(postal.value)) {
      postal.classList.add("alert-danger");
    } else {
      postal.classList.remove("alert-danger");
    }
    if (validator.isEmpty(message.value)) {
      message.classList.add("alert-danger");
    } else {
      message.classList.remove("alert-danger");
    }
  });
};

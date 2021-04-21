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
    console.log(card);
    //Validaciones
    if (validator.isEmpty(card.value)) {
      alert.style.display = "block";
      card.classList.add("alert-danger");
    } else {
      alert.style.display = "none";
      card.classList.remove("alert-danger");
    }
    if (validator.isEmpty(cvc.value)) {
      alert.style.display = "block";
      cvc.classList.add("alert-danger");
    } else {
      alert.style.display = "none";
      cvc.classList.remove("alert-danger");
    }
    if (validator.isEmpty(amount.value)) {
      alert.style.display = "block";
      amount.classList.add("alert-danger");
    } else {
      alert.style.display = "none";
      amount.classList.remove("alert-danger");
    }
    if (validator.isEmpty(name.value)) {
      alert.style.display = "block";
      name.classList.add("alert-danger");
    } else {
      alert.style.display = "none";
      name.classList.remove("alert-danger");
    }
    if (validator.isEmpty(lastname.value)) {
      alert.style.display = "block";
      lastname.classList.add("alert-danger");
    } else {
      alert.style.display = "none";
      lastname.classList.remove("alert-danger");
    }
    if (validator.isEmpty(city.value)) {
      alert.style.display = "block";
      city.classList.add("alert-danger");
    } else {
      alert.style.display = "none";
      city.classList.remove("alert-danger");
    }
    if (validator.isEmpty(state.value)) {
      alert.style.display = "block";
      state.classList.add("alert-danger");
    } else {
      alert.style.display = "none";
      state.classList.remove("alert-danger");
    }
    if (validator.isEmpty(postal.value)) {
      alert.style.display = "block";
      postal.classList.add("alert-danger");
    } else {
      alert.style.display = "none";
      postal.classList.remove("alert-danger");
    }
    if (validator.isEmpty(message.value)) {
      alert.style.display = "block";
      message.classList.add("alert-danger");
    } else {
      alert.style.display = "none";
      message.classList.remove("alert-danger");
    }
  });
};

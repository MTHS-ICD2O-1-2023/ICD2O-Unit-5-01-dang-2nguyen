// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html
const randomnumber = Math.floor(Math.random()*6)+1

function checking() {
  const usernumber = parseInt(document.getElementById("number").value)
  if (usernumber == randomnumber) {
    document.getElementById("result").innerHTML = "you have guessed the correct number"
  }
  if (usernumber!= randomnumber) {
    document.getElementById("result").innerHTML = "you have guessed the wrong number"
  }
  document.getElementById("rightAnswer").innerHTML = "It is number " + randomnumber
}
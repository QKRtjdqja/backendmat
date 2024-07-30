"use strict";

const id = document.querySelector("#id"),
  psword = document.querySelector("#psword"),
  loginBtn = document.querySelector("#button");

loginBtn.addEventListener("click", login);

function login(){
  const req = {
    id: id.value,
    psword: psword.value,
  };

  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
  .then((res) => res.json())
  .then((res) => {
    if(res.success){
      location.href = "/login";
    } else{
      alert(res.msg);
    } 
  })
  .catch((err) => {
    console.error("회원가입 중 에러 발생");
  });
};


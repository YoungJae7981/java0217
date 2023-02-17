const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(e) {}

function paintGreetings(username) {
  // h1태그의 인사말을 넣는다.
  // h1 태그의 hidden속성을 지운다.
}

const savedUsername = console.log(savedUsername);
if (savedUsername === null) {
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}

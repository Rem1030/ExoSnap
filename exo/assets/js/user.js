document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
 
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  console.log("Login attempted with:", { username, password });
});

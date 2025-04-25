document.getElementById("loginForm").addEventListener("sumbit" , function(event){
 event.preventDefault();

 const username = document.getElementById("usernme").value;
 const password = document.getElementById("password").value;  
 const remerberMe = document.getElementById("rememberMe").checked;   
 
 alert(`Username: ${username}\n Password: ${password}\nRemember Me: ${remerberMe}`); 
});
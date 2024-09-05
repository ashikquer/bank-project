document.getElementById('submit-buttton').addEventListener('click', function(){
   //User Email Get
    const userInput = document.getElementById("user-email");
  const userEmail = userInput.value;
   
   //User Password Get
 const passwordInputField = document.getElementById('user-password');
 const userPassword = passwordInputField.value;
 if(userEmail == 'admin@gmail.com' && userPassword == '123456'){
    alert("Login Successful!");
    window.location.href = "../banking.html"
 }
})

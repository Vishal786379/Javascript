// Create an HTML page containing two textboxes for inputting the username & password respectively. 
// Add a button titled Sign In. On the button click, invoke a JS function 
// which checks if the username and password are citiustech (case insensitive match) 
// and if so, redirects them to www.google.com in a new window without a menu bar 
// and address bar. If the username and/or password is not citiustech, 
// then an error message in dark red color must be displayed beneath the appropriate textbox 
// displaying a suitable error message.

document.querySelector('#button').addEventListener('click',function(){
    let username = document.getElementById('username1').value;
    let password = document.getElementById('password1').value;
   
    
    if(username === 'citiustech' && password === 'citiustech'){
        document.getElementById('error1').innerHTML="<span></span>";
        window.open("https://www.google.com","_blank","menubar=0","addressbar=0");
    }
    else{

      document.getElementById('error1').innerHTML="Username and Password is wrong";
    }
    
})

// function signIn(){
//     let username = document.getElementById('username1').value;
//     let password = document.getElementById('password1').value;
//     let error = document.getElementById('error1').textContent="Username and Password is wrong";
     
//     if(username === 'citiustech' && password === 'citiustech'){
//         window.open("https://www.google.com");
    
//     }
//     else{
//         return error;
//     }
    
// }

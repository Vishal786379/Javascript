// Refactor the previous assignment to include the following:
// a. When the user presses the tab key in each textbox, perform the check as mentioned above.
// b. Write JS code to validate each key inputted in each textbox and display an error message beneath each textbox if a space character is detected in username or password.
// c. As long as the username and password textboxes are empty, disable the button. The button must be enabled only when both textboxes contain text.

//username function to check entered username is correct or not
function usernm(){
    let username = document.getElementById("username").value;
    username = username.toLowerCase();
    let msgs = document.getElementsByClassName("error");

    if(username != "citiustech")
    {
        msgs[0].innerHTML="<p style=color:red>Enter correct Username</p>";
    }
    else{
        msgs[0].innerHTML="<p></p>";
    }
    
}

//password function to check entered password is correct or not
function passwd(){
    let password = document.getElementById("password").value;
    password = password.toLowerCase();
    let msgs = document.getElementsByClassName("error");

    if(password != "citiustech")
    {
        msgs[1].innerHTML="<p style=color:red>Enter correct Password</p>";
    }
    else{
        msgs[1].innerHTML="<p></p>";
    }
    
}

//function to check space
function space(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let msgs = document.getElementsByClassName("error");
    let btn = document.getElementById("btn");

    if(username.includes(" ")){
        msgs[0].innerHTML="<p style=color:red>Space not allowed</p>";

    }
    if(password.includes(" ")){
        msgs[1].innerHTML="<p style=color:red>Space not allowed</p>";
    
    }

    //disable button when both the fields are empty
    if(username != "" && password != ""){
        btn.removeAttribute('disabled');
    }
    else{
        btn.setAttribute('disabled');
    }

}

//check all condition regarding username and password
function login(){

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let msgs = document.getElementsByClassName("error");
      
    username = username.toLowerCase();
    password = password.toLowerCase();

    if(username == "citiustech" && password == "citiustech"){
        
        msgs[0].innerHTML="<p></p>";
        msgs[1].innerHTML="<p></p>";
        window.open("http://www.google.com", menubar=0,addressbar=0);
        
        
     }
    else if(username != "citiustech" && password != "citiustech"){
        msgs[0].innerHTML="<p style=color:red>Enter correct username</p>";
        msgs[1].innerHTML="<p style=color:red>Enter correct Password</p>";
        
    }
    else if(username != "citiustech"){
        msgs[0].innerHTML="<p style=color:red>Enter correct Username</p>";
        msgs[1].innerHTML="<p></p>";

    }
    else{
        msgs[0].innerHTML="<p></p>";
        msgs[1].innerHTML="<p style=color:red>Enter correct Password</p>";

    }
}
var emailArray=[];
var passwordArray=[];

var loginBox = document.getElementById("login");
var regBox = document.getElementById("register");
var forgetBox = document.getElementById("forgot");


function register(){
    event.preventDefault();

    var email = document.getElementById("re").value;
    var password = document.getElementById("rp").value;
    var passwordRetype = document.getElementById("rrp").value;
    var regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (email == ""){
        document.getElementById('error-email').innerHTML = " Email required *";
        return ;
    }
        else {
            document.getElementById('error-email').innerHTML = "";
        }
    
    if (!(regEmail.test(email) ) ) {
            document.getElementById('error-email').innerHTML = "You have entered an invalid email address!";
            return ;
        }
        else {
            document.getElementById('error-email').innerHTML = "";
        }

    if (password == ""){
        document.getElementById('error-password').innerHTML = " Password required *";
        return ;
        }
        else {
            document.getElementById('error-password').innerHTML = "";
        }

    if (passwordRetype == ""){
        document.getElementById('error-repassword').innerHTML = " Password required *";
        return ;
        }
        else {
            document.getElementById('error-repassword').innerHTML = "";
        }

    if ( password != passwordRetype ){
        document.getElementById('error-repassword').innerHTML = " Password don't match retype your Password.";
        return;
        }
        else {
            document.getElementById('error-repassword').innerHTML = "";
        }

    if(emailArray.indexOf(email) == -1){
        emailArray.push(email);
        passwordArray.push(password);

        alert(email + "  Thanks for registration. \nTry to login Now");

        document.getElementById("re").value ="";
        document.getElementById("rp").value="";
        document.getElementById("rrp").value="";
    }
    else{
        alert(email + " is already register.");
        return ;
    }
}

function login(){
    event.preventDefault();

    var email = document.getElementById("se").value;
    var password = document.getElementById("sp").value;
    var i = emailArray.indexOf(email);

    if(emailArray.indexOf(email) == -1){
        if (email == ""){
            document.getElementById('login-error-email').innerHTML = " Email required. *";
            return ;
        }
        document.getElementById('login-error-email').innerHTML = " Email does not exist.";
        return ;
    }
    
    if(passwordArray[i] != password){
        if (password == ""){
            document.getElementById('login-error-password').innerHTML = "Password required. *";
            // alert("Password required.");
            return ;
        }
        document.getElementById('login-error-password').innerHTML = "Password does not match *";
        // alert("Password does not match.");
        return ;
    }
 
    else{
        alert(email + " yor are login Now \n welcome to our website.");

        document.getElementById("se").value ="";
        document.getElementById("sp").value="";
        document.getElementById('login-error-password').innerHTML = "";
        document.getElementById('login-error-email').innerHTML = "";
        return ;
    }


}
function forgot(){
    event.preventDefault();

    var email = document.getElementById("fe").value;

    if(emailArray.indexOf(email) == -1){
        if (email == ""){
            alert("Email required.");
            return ;
        }
        alert("Email does not exist.");
        return ;
    }

    alert("email is send to your email check it in 24hr. \n Thanks");
    document.getElementById("fe").value ="";
}
"use strict"

function ValidateEmail(userEmail)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(userEmail.value.match(mailformat)){
    return true;
    } 
    else {
    alert("You have entered an invalid email address!");

    userEmail.focus();
    return false;
    }
} 

function ValidateName(userName)
{ 
    var letters = /^[A-Za-z]+$/;
    if(userName.value.match(letters))
    {
        return true;
    }
    else
    {
        alert('Name must have alphabet characters only');
        userName.focus();
        return false;
    }
}

function ValidateRadio()
{
    if(!(document.getElementById('gM').checked) ||
        	!(document.getElementById('gF').checked) )  {
                alert('You must check wheter you are male or female');  
            }
}

function submit()
{
    var first = document.form1.fname;
    var last = document.form1.lname;
    var userEmail = document.form1.email;

    
  
    ValidateName(first);
    ValidateName(last);
    ValidateRadio();
    ValidateEmail(userEmail);
     
}

 /*  
function validate1()
{
    var x = document.forms["form1"]["fname"].value;
           

        if(x=="")
            {
                alert("You should enter your first name!")
                document.form1.fname.focus();
                return false;
            }

            var y = document.forms["form1"]["lname"].value;
            if(y=="")
            {
                alert("You should enter your last name!")
                document.form1.lname.focus();
                return false;
            }

            var y = document.forms["form1"]["email"].value;
            if(y=="")
            {
                alert("You should enter your e-mail!")
                document.form1.email.focus();
                return false;
            }



            


            
            
    
    }*/
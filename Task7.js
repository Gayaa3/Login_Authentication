let nameEl = document.getElementById("name");
let emailEl = document.getElementById("email");
let passwordEl = document.getElementById("password");

let nameMsgEl = document.getElementById("nameMsg");
let emailMsgEl = document.getElementById("emailMsg");
let passwordMsgEl = document.getElementById("passwordMsg");

let loginEl = document.getElementById("login");
let formEl = document.getElementById("formEl");

let resultEl = document.getElementById("result")

let data = 
{
    name:"",
    email:"",
    password:""
};

function nameError()
{
    if(data.name === "")
    {
        nameMsgEl.textContent = "Please Enter Name";
        nameMsgEl.classList.add("error");
    }
    else
    {
        nameMsgEl.textContent = "";
    }
};

function emailError()
{
    if(data.email === "")
    {
        emailMsgEl.textContent = "Please Enter Email Id";
        emailMsgEl.classList.add("error");
    }
    else
    {
        emailMsgEl.textContent = "";
    }
};

function passwordError()
{
    if(data.password === "")
    {
        passwordMsgEl.textContent = "Please Enter Passsword";
        passwordMsgEl.classList.add("error");
    }
    else
    {
        passwordMsgEl.textContent = "";
    }
};



nameEl.addEventListener("change",function(event)
{
    data.name = event.target.value;
});

emailEl.addEventListener("change",function(event)
{
    data.email = event.target.value;
});

passwordEl.addEventListener("change",function(event)
{
    data.password = event.target.value;
});



formEl.addEventListener("submit",function(event)
{
    event.preventDefault();
    nameError();
    emailError();
    passwordError();
    
})
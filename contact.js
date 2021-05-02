var form = document.getElementsByTagName("form")[0];
const name_user=document.querySelector("#name");
const email=document.querySelector("#email");
const telephone=document.querySelector("#tel");
const feedback=document.querySelector("#feedback");
form.addEventListener("submit", function(e) {
  e.preventDefault();
  sendData();
});

function sendData() {

  const data=`Name:-${name_user.value} <br> E-mail:-${email.value} <br> Mobile:-${telephone.value} <br> Feedback:-${feedback.value}`;

  Email.send({
    Host : "smtp.gmail.com",
    Username : "mailcollector23",
    Password : "yqhslhlj",
    To : 'sharmamanavcool@gmail.com',
    From : "mailcollector@gmail.com",
    Subject : "mail",
    Body : data,
}).then(
  message => {
    if(message==="OK"){
      alert("Your Feedback has been recorded.We will get back to you sooner.\n Thank You");
    }
    else{
      alert("An error occured. Please try again later");
    }
  }
);
}


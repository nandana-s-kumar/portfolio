function sendMail() {
    var params = {
        name:document.getElementById("nameInput").value ,
        email:document.getElementById("emailInput").value ,
        message:document.getElementById("messageInput").value ,

    };
const serviceID = "service_0959cnc";
const templateID = "template_1ms6ji9";

emailjs
.send(serviceID,templateID,params)
.then((res) => {
        document.getElementById("nameInput").value ="";
        document.getElementById("emailInput").value ="";
        document.getElementById("messageInput").value ="";
        console.log(res);
        alert("your message sent successfully");
    })
.catch((err) => console.log(err));
}
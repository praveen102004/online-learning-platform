var signup=document.querySelector("#signup")
var back=document.querySelector(".bg")
var button=document.querySelector(".bns")
var loginButton = document.querySelector("#loginBtn");
loginButton.addEventListener("click", function() {
    var email = document.querySelector("input[name='email']").value;
    var password = document.querySelector("input[name='password']").value;

    if (email === "" || password === "") {
        alert("Please fill in all fields.");
    } else {
        window.location.href = "home.html";  // Redirect to home.html
    }
})
button.addEventListener("click",function()
{
    signup.style.display="block"
    back.style.display="block"
})
var submit=document.querySelector("#abc")
submit.addEventListener("click",function(event){
    event.preventDefault();
  
    submit.reset();
})
var cancel=document.querySelector("#ABC")
    cancel.addEventListener("click",function(event){
        signup.style.display="none"
    back.style.display="none"
    event.preventDefault();    
    })
    var pybtn=document.getElementById("pythonbtn");
    function goToPythonCourse() {
        window.location.href = 'python.html';
    }
    let sections = document.querySelectorAll('section');
    let navlinks = document.querySelectorAll('nav ul li a');
    
    window.onscroll = () =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('nav ul li [href*='+ id +']').classList.add('active');
            })
        
        }
    }
    var pybtn=document.getElementById("pythonbtn");
    function goTojavaCourse() {
        window.location.href = 'java.html';
    }
    var pybtn=document.getElementById("pythonbtn");
    function goTocCourse() {
        window.location.href = 'c.html';
    }
    var pybtn=document.getElementById("pythonbtn");
    function goToccCourse() {
        window.location.href = 'c++.html';
    }
    var pybtn=document.getElementById("pythonbtn");
    function goTorCourse() {
        window.location.href = 'r.html';
    }
    var gobackbtn=document.getElementById("backbtn");
    function goback() {
        window.location.href = 'home.html#contact';
    }
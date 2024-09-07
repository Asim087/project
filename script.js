
document.getElementById("button").addEventListener('click',()=>{
    document.getElementById("login_cont").style.opacity = 1;
    document.getElementById("contactUs_cont").style.opacity = 0;
    document.getElementById("register_cont").style.opacity = 0;
    
});
document.getElementById("registerbtn").addEventListener('click',()=>{
    document.getElementById("register_cont").style.opacity = 1;
});
document.getElementById("contactusBtn").addEventListener('click',()=>{
    document.getElementById("contactUs_cont").style.opacity = 1;
    document.getElementById("register_cont").style.opacity = 0;
    document.getElementById("login_cont").style.opacity = 0;

});



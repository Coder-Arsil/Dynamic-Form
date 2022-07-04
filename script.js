document.getElementById("go_signup").onclick = function(){
    var form1 = document.getElementById("form-1");
    form1.classList.remove("d-none");
    var form2 = document.getElementById("form-2");
    form2.classList.add("d-none");
}
document.getElementById("go_signin").onclick = function(){
    var form1 = document.getElementById("form-1");
    form1.classList.add("d-none");
    var form2 = document.getElementById("form-2");
    form2.classList.remove("d-none");
}
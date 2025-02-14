let formsContainer=document.querySelector(".forms");
let forms=document.querySelectorAll(".forms form");
console.log(forms)

function test (arg){
    formsContainer.style.display="unset";
    for (let i = 0; i < forms.length; i++) {
        if (forms[i].id==arg ){
            forms[i].style.display="";
        }
        else{
            forms[i].style.display="none";
        }
    }
}
function closeForm(){
    formsContainer.style.display="none";

}
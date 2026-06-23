const input = document.querySelector("#check");

input.addEventListener("change", (e) => {
    if(e.target.checked === true){
        console.log("marcado")
    }else {
        console.log("desmarcado")
    }
});
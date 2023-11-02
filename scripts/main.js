let myimage = document.querySelector("img");

myimage.onclick = function() {
    
    let mysrc = myimage.getAttribute("src");
    
    if (mysrc === "images/bow.png"){
        
        myimage.setAttribute("src", "images/pikachu.png");
        
    }
    else {
        
        myimage.setAttribute("src", "images/bow.png");
        
    }
    
};

let mybutton = document.querySelector("button");

let mytitle = document.querySelector("h3");

let check = false;

function setuser() {
    
    let name = prompt("Por favor, ingresa tu nombre.");
    
    if (!name) {
        
        setuser();
        
    }
    else {
        
    localStorage.setItem("nameS", name);
    mytitle.textContent = "Hola arquero " + name;
        
    }
}

if (check === true){
    
    if (!localStorage.getItem("nombreS")) {

        setuser();

    }
    else{

        let savedname = localStorage.getItem("nameS");
        mytitle.textContent = "Hola arquero " + savedname;

    }
    
}

mybutton.onclick = function() {
    
    setuser();
    check = true;
    
};
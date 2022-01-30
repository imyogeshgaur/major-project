const toggler = document.getElementById("toggler");
toggler.addEventListener("change",(e)=>{
    e.preventDefault();
    if(e.target.checked){
    const body = document.body;
    const navbar = document.getElementById("navigation");
    const btn1 = document.getElementById("a_generate")
    const btn2 = document.getElementById("button");
    const darkOrLight = document.getElementById("darkOrLight")
    body.style.backgroundColor =  "black";
    body.style.color = "white"
    navbar.style.background = "#4c4177";
    navbar.style.backgroundImage = "linear-gradient(315deg, #4c4177 0%, #2a5470 74%)";
    btn1.style.color = "red"
    btn2.style.color = "red"
    darkOrLight.innerText = "Light Mode"
    }else{
    const body = document.body;
    const navbar = document.getElementById("navigation");
    const btn1 = document.getElementById("a_generate")
    const btn2 = document.getElementById("button");
    const darkOrLight = document.getElementById("darkOrLight")
    body.style.backgroundColor =  "white";
    body.style.color = "black"
    navbar.style.background = "linear-gradient(rgb(193, 98, 248),rgb(247, 202, 247))";
    btn1.style.color = "black"
    btn2.style.color = "black"
    darkOrLight.innerText = "Dark Mode"
    }
})
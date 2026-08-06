// Typing Effect

const text = [
    "IT Engineer",
    "Network Engineer",
    "System Administrator"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

const typingElement = document.querySelector(".typing");


function typeEffect(){

    currentText = text[index];

    if(!isDeleting){

        typingElement.textContent =
        currentText.substring(0,charIndex++);

        if(charIndex > currentText.length){
            isDeleting = true;
            setTimeout(typeEffect,1200);
            return;
        }

    }else{

        typingElement.textContent =
        currentText.substring(0,charIndex--);


        if(charIndex < 0){

            isDeleting=false;
            index++;

            if(index >= text.length){
                index=0;
            }

        }
    }


    setTimeout(typeEffect,isDeleting ? 60 : 120);

}


typeEffect();





// Hamburger Menu

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-links");


if(menuBtn){

menuBtn.addEventListener("click",()=>{

    navMenu.classList.toggle("active");

});

}





// Smooth Scroll

document.querySelectorAll("a[href^='#']")
.forEach(link=>{

link.addEventListener("click",function(e){

    e.preventDefault();

    document.querySelector(this.getAttribute("href"))
    .scrollIntoView({
        behavior:"smooth"
    });

});

});






// Skill Animation On Scroll

const skills = document.querySelectorAll(".progress span");


window.addEventListener("scroll",()=>{

skills.forEach(skill=>{

let position =
skill.getBoundingClientRect().top;


if(position < window.innerHeight){

skill.style.transition="1.5s";
skill.style.width=skill.dataset.width;

}


});


});







// Particle Background

const script = document.createElement("script");

script.src =
"https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js";


script.onload=function(){


particlesJS("particles-js",{

particles:{

number:{
value:80
},

color:{
value:"#00ffff"
},

shape:{
type:"circle"
},

opacity:{
value:0.5
},

size:{
value:3
},

move:{
speed:2
}


},


interactivity:{

events:{

onhover:{
enable:true,
mode:"repulse"
}

}

}


});


};


document.body.appendChild(script);

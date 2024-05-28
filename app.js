bottomBtn = document.getElementById('bottom-Btn');
const navigation = document.getElementById('nav-sticky');

const navRight = document.getElementById('nav-right');

const bar = document.getElementById('menu');

const close = document.getElementById('close');

bar.addEventListener("click", function(){
    navRight.style.opacity = 1;
    navRight.style.transform = "scale(1)";
    close.style.display ='block';
    bar.style.display = "none";

});

close.addEventListener("click", function(){
    navRight.style.opacity = 0;
    navRight.style.transform = "scale(0)";
    bar.style.display ='block';
    close.style.display ='block';
});

function bottomTopBtn() {
    if (window.scrollY  >200 ) {
        bottomBtn.style.opacity = 1;
        bottomBtn.style.bottom = '30px'
        navigation.classList.add('nav-sticky');
    } else {
        bottomBtn.style.opacity = 0;
        bottomBtn.style.bottom =  0;
        navigation.classList.remove('nav-sticky')
    }
}

// Assuming you want to call the function when the user scrolls
window.addEventListener('scroll', bottomTopBtn);


let imgArr = [
    "/assets/header-1.jpg",
    "/assets/header-2.jpg",
    "/assets/header-3.jpg",
    "/assets/header-4.jpg"
];

let currentIndex = 0;

const updateImg = () => {
    const headerImg = document.getElementById("images")
    headerImg.classList.remove("animate-img")
    headerImg.style.opacity = 0
    headerImg.src = imgArr[currentIndex]
    currentIndex = (currentIndex + 1) % imgArr.length
    setTimeout(() => {
        headerImg.style.opacity = 1
        headerImg.classList.add("animate-img")
    }, 200);
};

updateImg();

setInterval(updateImg, 15000);


// service Id = service_2uaoxlr

// template id = template_0bti1fc

// public key = U7uoK_po1wDEdpp0x

(function () {
    emailjs.init("U7uoK_po1wDEdpp0x");
})();

const form = document.querySelector("form");
const feilds = document.querySelectorAll(".feilds");

const sendEmail = () => {
    emailjs.sendForm("service_2uaoxlr", "template_0bti1fc", form)
        .then((response) => {
            console.log("Email sent successfully:", response);
        })
        .catch((error) => {
            console.error("Error sending email:", error);
        });
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
    console.log(feilds)
    feilds.forEach((feilds) => {
        feilds.value = ""
    })
});
  
// JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const sectionsToAnimate = document.querySelectorAll('.animate');
  
    const animateOnScroll = () => {
      sectionsToAnimate.forEach(section => {
        const topPosition = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
  
        if (topPosition < screenHeight * 0.75) {
          section.classList.add('animate'); // Add the class to trigger animation
        }
      });
    };
  
    // Call the function initially and on scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
  });
  


// const input = document.querySelectorAll('.feilds')
// const designs = document.getElementsByClassName('style');

// input.addEventListener('input', function() {
//     if (this.value.trim() !== '') {
//         designs.style.top = '-20px'; // Adjust this value as needed
//     } else {
//         // designs.style.position = 'static';
//         designs.style.top = 0;
//     }
// });

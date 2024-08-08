let tl = gsap.timeline();
tl.from("nav h1,nav ul li,.btn_box a,nav .fa-bars",{
    y:-50,
    opacity:0,
    stagger:0.3
})
tl.from(".home .left h1,.home .left p",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.3
})
tl.from(".home .left div",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.3
})
gsap.from(".home .right img",{   
    transform:"translateX(150%)",
    duration:1,
    opacity:1
})
let bars = document.querySelector(".fa-bars");
let sidebar = document.querySelector(".sidebar");
let cls = document.querySelector(".sidebar button")
bars.addEventListener("click",function(){
    sidebar.style.transform="translateX(0px)";
})
cls.addEventListener("click",function(){
    sidebar.style.transform="translateX(-400px)";
})
document.addEventListener("scroll", function() {
    const navbar = document.querySelector("nav");
    if (window.scrollY > 0) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
  
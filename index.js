

function openNav(){
    document.getElementById("mySidebar").style.width="250px";
    document.getElementById("mobile-sideNav").style.zIndex="0";
    document.getElementById("main").style.background="linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3))";
    
    var element = document.querySelectorAll(".skill-items");
    for (let i = 0; i < element.length; i++) {
        element[i].classList.add("skill-item");
    }
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.background="none";
    document.getElementById("main").style.opacity="1";
    var element = document.querySelectorAll(".skill-items");
    for (let i = 0; i < element.length; i++) {
        element[i].classList.remove("skill-item");
    }

}
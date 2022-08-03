// var openNav = document.getElementsById("mySidebar");
// var openSideNav = document.getElementsByClassName("navContainer");
// var closeNav = document.getElementsByClassName("navContainer");

function openNav(){
    document.getElementById("mySidebar").style.width="250px";
    document.getElementById("mobile-sideNav").style.zIndex="0";
    document.getElementById("main").style.background="linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3))";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.background="none";
}
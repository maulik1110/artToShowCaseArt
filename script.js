// var elem = new Date()

// var element = abc;


var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-content");

function open(name){
    for(tablink of tablinks){
        tablink.classlist.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementsById(name).classList.add("active-tab")
}

var sidemenu= document.getElementById("slidemenu");

function openSideMenu(){
    sidemenu.style.right= 0
    // console.log("hi");
}
function closeSideMenu(){
    sidemenu.style.right= "-200px"
}

// const msg = document.getElementById("msg")
// msg.onclick(){
// }
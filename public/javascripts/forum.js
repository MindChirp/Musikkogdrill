function expandQuestion(el, close) {

    var isDisp = el.classList.contains("displaying")?true:false;
    if(!isDisp && !close) {
        var h = parseInt(window.getComputedStyle(el).height);
        el.style.height = h + "px";
        el.prevHeight = h;
        el.classList.add("displaying");
        var sectHeight = el.scrollHeight;
        el.style.height = sectHeight + "px";

        //Spin the button
        el.querySelector(".expand").style.transform = "rotate(-180deg) translate(0,50%)";
        el.style.zIndex = "10";
    } else {
        el.style.height = el.prevHeight + "px";
        el.classList.remove("displaying");
        el.querySelector(".expand").style.transform = "rotate(0deg) translate(0,-50%)";
        setTimeout(()=>{
            el.style.zIndex = "1";
        }, 300)
    }

}


function closeEveryDropDown() {
    var menus = document.getElementsByClassName("FAQ")[0].getElementsByClassName("card");

    for(let i = 0; i < menus.length; i++) {
        expandQuestion(menus[i].querySelector(".section"), true)
    }
}

function toggleDropDown(el) {
    //Check if element is expanded
    console.log(el)
    var exp = el.classList.contains("displaying");
    closeEveryDropDown();
    setTimeout(()=>{
        if(exp) return;
        expandQuestion(el, false);

    }, 300)
}
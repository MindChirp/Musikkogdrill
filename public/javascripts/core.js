window.addEventListener("resize", ()=>{
    var h = window.innerHeight;
    var w = window.innerWidth;

    if(w < 882) {
        //Set body to compact mode
        compactMode(true);
    } else if(w > 882) {
        compactMode(false); 
    }
})

function compactMode(bool) {

    if(bool) {
        if(document.body.classList.contains("compact")) return;
        document.body.classList.add("compact");
    } else if(bool != false) {
        document.body.classList.toggle("compact");
    } else if(bool == false) {
        document.body.classList.remove("compact");
    }
}

window.onload = ()=>{

    
    var h = window.innerHeight;
    var w = window.innerWidth;
    
    if(w < 882) {
        //Set body to compact mode
        compactMode(true);
    } else if(w > 882) {
        compactMode(false); 
    }
}
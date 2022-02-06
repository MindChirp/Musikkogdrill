window.addEventListener("load", ()=>{

    document.body.addEventListener("scroll", handleScroll);

    //Set random jumbotron images
    setImages();
});


function scrollPage() {
    var el = document.querySelector("body > div.content > div.links");
    el.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}



//Handle page scrolling
var prevScrollPos = document.body.scrollTop;
function handleScroll(e){
    var y = document.body.scrollTop;
    var x = document.body.scrollLeft;
    if(parseInt(prevScrollPos) > parseInt(y)) {
        var bar = document.getElementById("nav-bar");
        bar.style.transform = "translate(0,0%)";
        
    } else {
        var bar = document.getElementById("nav-bar");
        bar.style.transform = "translate(0,-100%)";
    }

    prevScrollPos = y;




    //Handle jumbotron fading
    
    var h = window.innerHeight;

    var pagesScrolled = y/h;

    var multiplier = 8;

    var trons = document.getElementsByClassName("jumbotron");
    
    var opac1 = 1-(pagesScrolled*multiplier);
    opac1 = opac1<0?0:opac1;

    var opac2 = pagesScrolled*multiplier;
    opac2 = opac2>1?1:opac2;

    trons[1].style.opacity = opac1;
    trons[0].style.opacity = opac2;
}



function transitionToMenu(el) {
    //el is the button element
    
    var pane = document.createElement("div");
    pane.className = "pop-menu-pane";
    
    document.body.appendChild(pane);

    var topBar = document.createElement("div");
    topBar.className = "top-bar";
    pane.appendChild(topBar);

    var close = document.createElement("button");
    close.className = "close-button";
    topBar.appendChild(close);

    var icon = document.createElement("ion-icon");
    icon.setAttribute("name", "close");
    close.appendChild(icon);

    close.addEventListener("click", (e)=>{
        //Close menu
        var menu = e.target.closest(".pop-menu-pane");
        hideNavBar(false);
        menu.parentNode.removeChild(menu);
    })

    return pane;
    /*Useless code as of now*/
    return;
    var rect = el.getBoundingClientRect();
    var style = window.getComputedStyle(el);

    var w = parseInt(style.width.split("px")[0]);
    var h = parseInt(style.height.split("px")[0]);

    pane.style.top = (rect.top + h/2) + "px";
    pane.style.left = (rect.left +w/2) + "px";

    setTimeout(()=>{
        pane.style.top = "0"
        pane.style.left = "0"
        pane.style.transform = "none";
    }, 500)
}



function showInstagram(el) {
    var menu = transitionToMenu(el);
    menu.classList.add("instagram");

    hideNavBar(true);

    var logo = document.createElement("ion-icon");
    logo.setAttribute("name", "logo-instagram");

    menu.querySelector(".top-bar").appendChild(logo);

    var cardWr = document.createElement("div");
    cardWr.className = "link-wrapper";

    menu.appendChild(cardWr);

    var card = document.createElement("div");
    card.className = "card hmkg";
    card.addEventListener("click", ()=>{
        window.open("https://www.instagram.com/hmkongensgarde/?hl=nb", "_blank").focus();
    })

    cardWr.appendChild(card);

    var card = document.createElement("div");
    card.className = "card kp3";
    card.addEventListener("click", ()=>{
        window.open("https://www.instagram.com/musikkogdrill/?hl=nb", "_blank").focus();
    })

    cardWr.appendChild(card);
} 

function showCalendar(el) {
    var menu = transitionToMenu(el);
    menu.classList.add("terminliste");

    hideNavBar(true);

    var logo = document.createElement("ion-icon");
    logo.setAttribute("name", "calendar-outline");
    menu.querySelector(".top-bar").appendChild(logo);


    var frame = document.createElement("iframe");
    /*<div class="lds-circle"><div></div></div>*/
    var loader = document.createElement("div");
    loader.className = "lds-circle loader";
    var wr = document.createElement("div");
    loader.appendChild(wr);

    menu.appendChild(loader);

    frame.src = "https://calendar.google.com/calendar/embed?src=3.gardekompani%40live.no&#038;ctz=Europe%2FOslo";

    menu.appendChild(frame);

    frame.onload = ()=>{
        frame.classList.add("loaded");
    }
}


function hideNavBar(bool) {
    if(bool) {
        var el = document.getElementById("nav-bar");
        el.style.transform = "translate(0,-100%)";
    } else {
        var el = document.getElementById("nav-bar");
        el.style.transform = "translate(0,0)";
    }
}


function setImages() {
    var arr = ["gardist.jpg", "gardist1.jpg", "gardist2.jpg", "gardist6.jpg", "gardist3.jpg", "gardist4.jpg", "gardist5.jpg", "gardist6.jpg"];

    var trons = document.getElementsByClassName("jumbotron");

    var indexes = [];

    for(let i = 0; i < trons.length; i++) {
        function findNum() {

            //Generate random number within range
            var num = Math.round(Math.random()*(arr.length-1));
            if(!indexes.includes(num)) {
                indexes.push(num)
            } else {
                //Try again
                findNum();
            }
        }
        findNum();   

    }

    for(let i = 0; i < trons.length; i++) {
        trons[i].style.backgroundImage = "url('../images/gardist" + indexes[i] + ".jpg')";
    }
    
}




function generateArticle(title, imgurl, excerpt) {
    var par = document.getElementsByClassName("articles")[0];
    
    var art = document.createElement("div");
    art.className = "article";

    par.appendChild(art);

    var img = document.createElement("img");
    img.src = imgurl;
    art.appendChild(img);

    var wr = document.createElement("div");
    wr.className = "wrapper";

    var t = document.createElement("span");
    t.innerText = title;
    wr.appendChild(t);
    t.className = "title";

    var sub = document.createElement("span");
    sub.className = "sub";
    excerpt=excerpt.length>100?excerpt.substring(0,100) + " [...]":excerpt;
    sub.innerText = excerpt
    wr.appendChild(sub);

    art.appendChild(wr);

    var wr1 = document.createElement("div");
    wr1.className = "button-wrapper";

    var read = document.createElement("button");
    read.className = "read-more";
    read.innerText = "Les mer";

    var ico = document.createElement("ion-icon");
    ico.setAttribute("name", "arrow-forward-outline");
    read.appendChild(ico);

    wr1.appendChild(read);
    art.appendChild(wr1)
}


var clicks = 0;
function imageClicker() {
    clicks++
    if(clicks >= 10) {

        //Show cool image
        var img = document.createElement("img");
        img.src = "./images/stensruuuuuud.png";

        document.body.appendChild(img);
        img.style = `
        
            position: absolute;
            width: 80%;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            z-index: 10;
            animation: fade-in 300ms ease-in-out;
        `;


        setTimeout(()=>{
            img.parentNode.removeChild(img);
            clicks = 0;
        }, 3000)

    }
}


//Creates the transition animation when clicking to
//e.g. the forum page
function fadeToSubPage(subsite) {
    var fadeModal = document.createElement("fader");
    fadeModal.className = "fader";
    fadeModal.style = `
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        background: #344D6C;
        animation: fade-in 500ms ease-in-out;
        z-index: 10;
        display: block;
        position: absolute;
    `;

    //document.body.appendChild(fadeModal);

    setTimeout(()=>{
        window.location = subsite;
        setTimeout(()=>{
            //fadeModal.parentNode.removeChild(fadeModal)
        }, 100)
    }, 0)

}


generateArticle("Nestlagfører i drilltroppen", "https://musikkogdrill.files.wordpress.com/2021/08/unnamed.jpg?w=1000", "Hverdagen som drillgardist kan, i grove trekk, bli beskrevet som en kontinuerlig kamp motdet freudiske id; den ukontrollerbare lysten etter umiddelbar og lettvint nytelse. Stridenutspiller seg i de vanlige gjøremål som fyller tjenestetilværelsen, det være seg spitting avsko, vedlikehold av våpen eller å gi alt under våpeneksersis. Her er det gode rutiner og bunnsolide holdninger rundt")
generateArticle("Kompanistaben", "https://musikkogdrill.files.wordpress.com/2021/07/img_9991.jpg?w=828", "3. Gardekompani består av 3 tropper: musikktroppen, drilltroppen og kompanistaben. Felles for troppene er at vi hver dag jobber mot et felles mål: å bli best mulig i det vi driver med. For de fleste i kompaniet består hverdagen av utallige timer sluttet orden og detalj-terping, men for tre av oss er hverdagen ganske annerledes.")
generateArticle("Drilltroppens midtparti", "https://musikkogdrill.files.wordpress.com/2021/07/bilde4.jpg?w=1000", "Hvert år er det en ny musikk- og drillkontingent som viser frem en Oladrill gjennom drillsesongen. Oladrillene er aldri like, og musikk og koreografi varierer fra år til år. Likevel er det en mal på hvordan drillen skal se ut, som befalet følger når de skal skrive en Oladrill. Noen eksempler på dette er at")
generateArticle("Lagfører i musikktroppen", "https://musikkogdrill.files.wordpress.com/2021/06/skjermbilde-2021-06-08-kl.-21.21.47.png?w=946", "I Musikktroppen er det for tida 76 vernepliktige gardistar, tre troppsbefal og to dirigentar. Som dei fleste kjenner til så består kvardagen til ein musikkgardist av store mengder trening og øving, gjerne over lange dagar. Dette krever naturleg nok ein del oppfølging langs med, og med såpass mange menneske i sving er det ikkje alt ")
generateArticle("Nasjonaldagen", "https://musikkogdrill.files.wordpress.com/2021/05/img_8467.jpg?w=1000", "Siden høsten 2020 har vi i 3. gardekompani trent iherdig for å bli best mulig i militær eksersis. Første milepæl i drillsesongen var gardesjefens evaluering, og etter godkjent drillprogram har kompaniet fått vist seg frem for barnehager, sykehus og for medsoldater på Huseby leir. Slike oppdrag har vært veldig givende for kompaniet. Det har vært")
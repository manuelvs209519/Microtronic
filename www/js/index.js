var pages=null;
var currentPage="Page1";

loadPages=function(){
    pages={
        Page1:document.getElementById("Page1"),
        Page2:document.getElementById("Page2"),
        Page3:document.getElementById("Page3"),
        Page4:document.getElementById("Page4"),
        Page5:document.getElementById("Page5"),
        Page6:document.getElementById("Page6")
    }
}
document.addEventListener('DOMContentLoaded', function(){
    loadPages();
    FastClick.attach(document.body);
}, false);

var isOpenedMenu=false;

function menuButtonClick(){
    if(isOpenedMenu){
        isOpenedMenu=false;
        pages[currentPage].className="body transition center";
    }else{
        pages[currentPage].className="body transition right";
        isOpenedMenu=true;
    }
}
function menu(selectedPage){
    pages[currentPage].className="hide";
    pages[selectedPage].className="body right";
    setTimeout(function(){
       pages[selectedPage].className="body visible transition center";
        currentPage=selectedPage;
        isOpenedMenu=false;
    },0);
}

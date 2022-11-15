
var numItems = document.querySelectorAll("#slider .slide");
var getSectionsId = new Array(numItems.length);

for (var i = 0; i < numItems.length; i++) {
     getSectionsId[i] = numItems[i].id;
}

function setHeaderColors(i){

    var search;
    var background_body;
    var background_menu;

    if(getSectionsId[i] == "home"){
        background_body = "#233D58";
        background_menu = "#233D58";
    }else{
        background_body = "#f1f1f1";
        background_menu = "#29abe2";
    }

    search = document.getElementById(getSectionsId[i]);
    search.style.background = background_body;

    /*Menu Manipulation*/
    var menu = document.getElementsByTagName("header")[0];
    menu.style.background = background_menu;
}

function displaySection(arrow){

    var search;
    var checkIfDisplay;
    var capture;

    for (var i = 0; i < numItems.length; i++) {

        search = document.getElementById(getSectionsId[i]);
        $(search).removeClass('activeSlide');
        checkIfDisplay = search.style.display;

        if(checkIfDisplay == "block"){
            search.style.display = "none";

            if(arrow == "next"){
                i++;
                if(i > (numItems.length - 1)) i = 0;
            }
            if(arrow == "prev"){
                i--;
                if( i < 0) i = numItems.length - 1;
            }

            search = document.getElementById(getSectionsId[i]);
            $(search).addClass('activeSlide');
            search.style.display = "block";
            break;

        }
    }

    setHeaderColors(i);

}

function rightSlide(){
    $('.activeSlide').addClass('rightSlideAnimation');
    setTimeout(
      function()
      {
        $('.activeSlide').removeClass('rightSlideAnimation');
    }, 500);

}


function leftSlide(){

    $('.activeSlide').addClass('leftSlideAnimation');
    setTimeout(
      function()
      {
        $('.activeSlide').removeClass('leftSlideAnimation');
    }, 500);

}

function navSection(nav){
    var numItems = document.querySelectorAll("#slider .slide");
    var getSectionsId = new Array(numItems.length);

    for (var i = 0; i < numItems.length; i++) {
         getSectionsId[i] = numItems[i].id;
    }

    var search;
    var show;


    for (var i = 0; i < numItems.length; i++){

        search = document.getElementById(getSectionsId[i]);

        search.style.display = "none";


        if(getSectionsId[i] == nav){
            search.style.display = "block";
            /*This fuunction change the background of menu*/
            setHeaderColors(i);
        }
    }
}

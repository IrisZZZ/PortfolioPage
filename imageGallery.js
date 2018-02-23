var imageNumber = 1;
var imageFile = document.getElementsByClassName("mySlides");
var imageCellList = document.getElementsByClassName("imageCell");

function init(){
    currentSlide(1);
}

function plusSlide(a){
    imageNumber += a;
    if(imageNumber < 1)
    imageNumber = imageFile.length;
    currentSlide(imageNumber);
}

function currentSlide(imageNumber){

        for(var i = 0; i< imageFile.length;i++){
        imageFile[i].style.display = "none";
        imageCellList[i].className = imageCellList[i].className.replace(" active","")
       }
        imageFile[(imageNumber - 1)%imageFile.length].style.display = "block";
        imageCellList[(imageNumber -1)%imageFile.length].className += " active";
   }
    init();
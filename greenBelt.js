

var startTime = 0,
      endTime = 0,
      pageNumber = 10,
      index = 0,
      now = 0;
var imageNumber = 0;
var dotFile = document.getElementsByClassName("dot");

  if ((navigator.userAgent.toLowerCase().indexOf("firefox")!=-1)){
      document.addEventListener("DOMMouseScroll",scrollFun,false);
  }
  else if (document.addEventListener) {
      document.addEventListener("mousewheel",scrollFun,false);
  }
  else if (document.attachEvent) {
      document.attachEvent("onmousewheel",scrollFun);
  }
  else{
      document.onmousewheel = scrollFun;
        }


  function scrollFun(event){
               startTime = new Date().getTime();

               var delta = event.detail || (-event.wheelDelta);
               if ((endTime - startTime) < -1000){
                   if(delta>0){
                       index ++;
                        currentSlide(index%pageNumber);
                      }
                   if(delta<0){
                     if(index < 1)
                     index = pageNumber;
                     index --;
                     currentSlide(index%pageNumber);
                   }
                    endTime = new Date().getTime();
               }
                  else{
                       event.preventDefault();
                   }
       }

function initialMenu(){
    document.getElementById("me1").setAttribute("class","menu3");
}
function currentSlide(a){
  index = a;
  for(i=0;i<pageNumber;i++){
     document.getElementById("gb"+i).style.display= "none";
     dotFile[i].style.background="#bbb ";
  }
    dotFile[a].style.background=" #717171 ";
  document.getElementById("gb"+a).style.display = "block";
}




function showMenu1(){
  document.getElementById("me1").setAttribute("class","menu");
  document.getElementById("me1").style.display ="block";
  document.getElementById("menuicon1").style.opacity =0;
  document.getElementById("menu-list1").style.display ="block";
  document.getElementById("iris-logo1").style.display="block";
  }
function menuFade1(){
  document.getElementById("me1").setAttribute("class","menu2");
  document.getElementById("menuicon1").style.opacity =1;
  document.getElementById("menu-list1").style.display ="none";
  document.getElementById("iris-logo1").style.display ="none";
}
function showMenu2(){
  document.getElementById("me2").setAttribute("class","menu");
  document.getElementById("me2").style.display ="block";
  document.getElementById("menuicon2").style.opacity =0;
  document.getElementById("menu-list2").style.display ="block";
  document.getElementById("iris-logo2").style.display ="block";
  }
function menuFade2(){
  document.getElementById("me2").setAttribute("class","menu2");
  document.getElementById("menuicon2").style.opacity =1;
  document.getElementById("menu-list2").style.display ="none";
  document.getElementById("iris-logo2").style.display ="none";
}
function showMenu3(){
  document.getElementById("me3").setAttribute("class","menu");
  document.getElementById("me3").style.display ="block";
  document.getElementById("menuicon3").style.opacity =0;
  document.getElementById("menu-list3").style.display ="block";
  document.getElementById("iris-logo3").style.display ="block";
  }
function menuFade3(){
  document.getElementById("me3").setAttribute("class","menu2");
  document.getElementById("menuicon3").style.opacity =1;
  document.getElementById("menu-list3").style.display ="none";
  document.getElementById("iris-logo3").style.display ="none";
}
function showMenu4(){
  document.getElementById("me4").setAttribute("class","menu");
  document.getElementById("me4").style.display ="block";
  document.getElementById("menuicon4").style.opacity =0;
  document.getElementById("menu-list4").style.display ="block";
  document.getElementById("iris-logo4").style.display ="block";
  }
function menuFade4(){
  document.getElementById("me4").setAttribute("class","menu2");
  document.getElementById("menuicon4").style.opacity =1;
  document.getElementById("menu-list4").style.display ="none";
  document.getElementById("iris-logo4").style.display ="none";
}
currentSlide(0);

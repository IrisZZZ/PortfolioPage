
var wrap = document.getElementById("wrap");
var main = document.getElementById("main");
var hei = document.body.clientHeight;
var hei2 = window.screen.availHeight;
var w = window.outerWidth;
var h = window.outerHeight;
// alert(hei +"+"+hei2+"+"+w+"+"+"h");
var pageNumber = 4;
var index = 0;
wrap.style.height = hei2 + "px";
var obj = document.getElementsByTagName("div");
for(var i=0;i<obj.length;i++){
    if(obj[i].className == 'grid-container'){
         obj[i].style.height = hei2  +"px";
    }
}

document.getElementById("me1").style.height = hei + "px";
document.getElementById("me2").style.height = hei + "px";
document.getElementById("me3").style.height = hei + "px";
document.getElementById("me4").style.height = hei + "px";


var startTime = 0,
      endTime = 0,
      now = 0;

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
                       document.getElementById("page"+ index%pageNumber).style.display = "none";
                       index ++;
                       document.getElementById("page" + index%pageNumber).style.display = "grid";
                       initialMenu();
                      }
                   if(delta<0){
                     if(index < 1)
                     index = 4;
                     document.getElementById("page"+ index%pageNumber).style.display = "none";
                     index --;
                     document.getElementById("page" + index%pageNumber).style.display = "grid";
                      initialMenu();
                   }
                    endTime = new Date().getTime();
               }
                  else{
                       event.preventDefault();
                   }
       }

function initialMenu(){
    document.getElementById("me1").setAttribute("class","menu3");
    document.getElementById("me2").setAttribute("class","menu3");
    document.getElementById("me3").setAttribute("class","menu3");
    document.getElementById("me4").setAttribute("class","menu3");

}
function showImage1(){
  document.getElementById("subtitle1-1").style.opacity = 1;
  document.getElementById("subtitle1-1").style.width = "105%";
  document.getElementById("subtitle1-2").style.opacity = 0.2;
  document.getElementById("subtitle1-3").style.opacity = 0.2;
  document.getElementById("imageTitle1").style.opacity = 1;
}
function fadeImage1(){
  document.getElementById("subtitle1-1").style.opacity = 0.8;
  document.getElementById("subtitle1-1").style.width = "100%";
  document.getElementById("subtitle1-2").style.opacity = 0.8;
  document.getElementById("subtitle1-3").style.opacity = 0.8;
    document.getElementById("imageTitle1").style.opacity = 0;
}
function showImage2(){
  document.getElementById("subtitle1-2").style.opacity = 1;
  document.getElementById("subtitle1-2").style.width = "130%";
  document.getElementById("subtitle1-1").style.opacity = 0.2;
  document.getElementById("subtitle1-3").style.opacity = 0.2;
  document.getElementById("imageTitle2").style.opacity = 1;
}
function fadeImage2(){
  document.getElementById("subtitle1-2").style.opacity = 0.8;
  document.getElementById("subtitle1-2").style.width = "120%";
  document.getElementById("subtitle1-1").style.opacity = 0.8;
  document.getElementById("subtitle1-3").style.opacity = 0.8;
  document.getElementById("imageTitle2").style.opacity = 0;
}


function showImage3(){
  document.getElementById("subtitle1-3").style.opacity = 1;
  document.getElementById("subtitle1-3").style.width = "105%";
  document.getElementById("subtitle1-1").style.opacity = 0.2;
  document.getElementById("subtitle1-2").style.opacity = 0.2;
  document.getElementById("imageTitle3").style.opacity = 1;
}
function fadeImage3(){
  document.getElementById("subtitle1-3").style.opacity = 0.8;
  document.getElementById("subtitle1-3").style.width = "100%";
  document.getElementById("subtitle1-1").style.opacity = 0.8;
  document.getElementById("subtitle1-2").style.opacity = 0.8;
  document.getElementById("imageTitle3").style.opacity = 0;
}
function showMenu1(){
  document.getElementById("me1").setAttribute("class","menu");
  document.getElementById("me1").style.display ="block";
  document.getElementById("menuicon1").style.opacity =0;
  document.getElementById("menu-list1").style.display ="block";
  document.getElementById("iris-logo1").style.display ="block";
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

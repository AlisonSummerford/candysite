//var header = document.querySelector(".myheader");
//var headerHeight = header.offsetHeight;
//console.log(headerHeight);

//var offset = document.querySelector(".offset");

//document.querySelector(".mytext").style.top = "-" + headerHeight;
//document.querySelector(".mytext").style.top = 100px;
//console.log(offset.style.marginTop = "50px");
//console.log(offset.offset().top,)

//offset = off.offset();
//console.log(offset)
//offset.top - $(document).scrollTop();

var myfunction = function(){

  var mygallery = document.querySelector(".mygallery").offsetHeight;
  console.log(mygallery)

  mg = mygallery.toString();
  console.log(mg)

  mgstring = mg+"px"
  document.getElementById("gallerysection").style.height = mgstring;

  x = document.getElementById("gallerysection").offsetHeight
  console.log(x)

  document.getElementById("gallerysection").style.padding = "0vh 0vh 10vh 0vh";

};

window.onresize = myfunction;
window.onload = myfunction;


function message(){

var message =   document.querySelector(".confirmation_message");
message.style.display="block";
}

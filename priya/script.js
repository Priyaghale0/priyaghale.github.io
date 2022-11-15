// začetek animacije menija
var menu = $('.gsap-menu'),
  menuContainer = $('.menu-container');
// nov TimelineMax
var tl = new TimelineMax({
  paused: true,
  reversed: true,
}); 
// animacija gumbov
// animacija gumba ki zapira
tl.from("#close", 0.3, {
   
  opacity:0,  
  transformOrigin:"center center",
ease: Circ.easeOut}
       )

// animacija gumba ki odpira
.to("#menuMobile", 0.3, {
   
  opacity:0, 
  transformOrigin:"center center", 
ease: Circ.easeOut}
   )
// animacija notranjosti menija
.from(menuContainer, 0.7, {
    x: -1000,
    autoAlpha: 0,
    force3D: true,
    ease: Expo.easeOut
  });
// preklop animacije
$(menu).on('click', function() {

  tl.reversed() ? tl.play() : tl.reverse();

return tl;
});
// animacija ikon
// določitev ikon
var icon = $('#ikona6'),
icon1 = $('#ikona3'),
icon2 = $('#ikona1');
var ikone = new TimelineMax({});
// animacija- spreminjanje ikon
ikone.to(icon, 1.5, {
  morphSVG:"#ikona5", 
  yoyo:true, 
  repeat:-1, 
  repeatDelay: 0.5, 
  ease:Power2.easeInOut},0)

  .to(icon1, 1.5, {
  morphSVG:"#ikona4", 
  yoyo:true, 
  repeat:-1, 
  repeatDelay: 0.5, 
  ease:Power2.easeInOut},0)

.to(icon2, 1.5, {
  morphSVG:"#ikona2", 
  yoyo:true, 
  repeat:-1, 
  repeatDelay: 0.5, 
  ease:Power2.easeInOut},0);
// animacije harmonike v navigaciji
// določimo animacijo, ki uporabi api jquery povezovanje in pridobivanje določenih elementov 
 
var harmonika = $(".accordion-group").map(harmonikaAnimacija);
// določimo da izbranim  pritiskom na gumb zaženemo animacijo, animira se vsak otrok elementov
$(".accordion-menu").click(animirajHarmoniko);

function animirajHarmoniko(event) {
  
  var izbrano = this;
  
  harmonika.each(function(i, animiraj) {
    animiraj(izbrano);
  });
}
// tukaj določimo, kako se bo animacija odvijala za posamezni element.
function harmonikaAnimacija(i, element) {
   var navigacija = element.querySelector(".accordion-menu"),
  skatlica = element.querySelector(".accordion-content"),
 arrow  = element.querySelector(".arrow");
var harmonika = new TimelineMax({});
  
  TweenMax.set(skatlica, { height: "auto"})
  var tween = harmonika
  .from(skatlica, 0.5, { 
    height: 0, 
    ease: Power2.easeInOut }).reverse()
 .to(navigacija, 0.5,{
    scale:1, 
    opacity:0.8  },0)
 .to(arrow, 0.02,{
    rotation:180, 
   transformOrigin: "50% 50%"},0)
  
// animacijo povrnemo v prejšnje stanje, če spet pritisnemo na gumb
   return function(izbrano) {
    
    var reversed = izbrano !== navigacija  ? true : !tween.reversed();
    tween.reversed(reversed);
  }
}


//NOTRANJA ANIMACIJA
var rocica = $("#rocica"),
    under = $("#Underconstruction"),
    townpath = $(".townpath path"),
    town = $(".town path"),
    cityBg = $("#city-bg"),
    controls = $("#Merilec path"),
    mult = [controls, rocica, town, mobile],
    body = $("body"),
    mobilepath = $(".mobilepath path"),
    mobile = $(".techno path"),
kazalec =$("#kazalcek");
TweenMax.set(rocica, {
  transformOrigin: "0% 50%",
});


// animacija teksta
 // določimo nov TimelineMax
 var tl1 = new TimelineMax({  yoyo:true}); 
// izbira vseh črk
var fonts = ["#t1", "#t2", "#t3", "#t4", "#t5","#t6", "#t7", "#t8", "#t9","#tl0" ,"#t11", "#t12","#t13", "#t14", "#t15", "#t16","#t17"];
// animacija črk
tl1.staggerFrom(fonts, 1, {
  y:"+=160", 
  scaleX:0.35, 
  scaleY:0.35,
  opacity:0.65, 
  rotation:360}, 0.1)
.staggerTo(fonts, 1, { 
  opacity:0.25, 
  repeat: -1 }, 0.2);

// nova funkcija za animacijo posameznih elementov, ko potegnemo ročico
function potegRocice() {
  // določimo novi Timeline Max, kateremu dodamo premor; animacija je v mirovanju, preden ne dobi ukaza
   var tl2 = new TimelineMax({paused: true});
    // dodamo konstruktor, kateri nam bo pomagal določiti časovni zamik animacij
  tl2.add("i");
    //animiramo pisavo
  tl2.staggerTo(fonts, 2.5, {
     scaleY: 0,
    opacity: 0,
     ease: Circ.easeOut
    }, "i+=1");
  //animiramo ozadje mesta
  tl2.from(cityBg, 2.5, {
      scaleY: 0,
      opacity: 0.4,
      transformOrigin: "50% 100%",
      ease: Circ.easeOut
    }, "i+=2");
   //animiramo pot mesta
   tl2.staggerFrom(townpath, 4,{
     drawSVG:"100% 100%"}, 0.5, "i+4");
   //animiramo pot elementov novih tehnologij
  tl2.staggerFrom(mobilepath, 3, {
     drawSVG:"100% 100%"}, 0.5, "i+=6");
  //animiramo mesto
    tl2.staggerFrom(town, 9, {
      y: -50,
    opacity: 0.4,
      scale: 0,
      cycle:{
       x:[300, -50, 200],
       
       rotation:[-80, 100, 150],
      }, 
      transformOrigin: "50% 50%",
      ease: Elastic.easeOut
    }, 0.5, "i+8");
  //animiramo elemente novih tehnologij
  tl2.staggerFrom(mobile, 7, {
      x: 300,
      scale: 0,
      transformOrigin: "50% 50%",
      rotation: -30,
      ease: Elastic.easeOut
    }, 0.2, "i+12");
  //animiramo kazalec
  tl2.to(kazalec, 100, {
     rotation:-180,
    transformOrigin: "15% 50%",
     ease: Power1.easeOut
    }, 0 );
   //povrnemo v prejšnje stanje
  return tl2;
}
//določimo element za poteg ročice
var gradnja = potegRocice();
//preklop vidika; določimo funkcijo in novi Tween Max
function vidnost(){
  var tl = new TimelineMax({
    paused: true
  });
  return tl;
}
//animacija in delovanje ročice
$(document).ready(function() {
Draggable.create(rocica, {
    type: "rotation",
    bounds: {
      minRotation: 0,
      maxRotation: -180
    },
   onDrag: function() {
      gradnja.progress((this.rotation)/-180 );
      gradnja.pause();
    }
  });
  });
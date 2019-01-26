// transition sur la redirection de mon liens d'ancrage
console.log("hey");
AOS.init();

(function() {
    var speed = 600;
    var moving_frequency = 15; // Affects performance !
    var links = document.querySelectorAll("a"); // Active links
    var href; 
    for(var i=0; i<links.length; i++)
    {   
        href = (links[i].attributes.href === undefined) ? null : links[i].attributes.href.nodeValue.toString();
        if(href !== null && href.length > 1 && href.substr(0, 1) == '#')
        {
            links[i].onclick = function()
            {
                var element;
                var href = this.attributes.href.nodeValue.toString();
                if(element = document.getElementById(href.substr(1)))
                {
                    var hop_count = speed/moving_frequency
                    var getScrollTopDocumentAtBegin = getScrollTopDocument();
                    var gap = (getScrollTopElement(element) - getScrollTopDocumentAtBegin) / hop_count;
                    
                    for(var j = 1; j <= hop_count; j++)
                    {
                        (function()
                         {
                             var hop_top_position = gap*j;
                             setTimeout(function(){  window.scrollTo(0, hop_top_position + getScrollTopDocumentAtBegin); }, moving_frequency*j);
                         })();
                    }
                }
                
                return false;
            };
        }
    }
    
    var getScrollTopElement =  function (e)
    {
        var top = 0;
        
        while (e.offsetParent != undefined && e.offsetParent != null)
        {
            top += e.offsetTop + (e.clientTop != null ? e.clientTop : 0);
            e = e.offsetParent;
        }
        
        return top;
    };
    
    var getScrollTopDocument = function()
    {
        return document.documentElement.scrollTop + document.body.scrollTop;
    };
})();

const monmenu = document.querySelector(".showmenu");
const divmenu = document.querySelector(".menu");
const monhamberger = document.querySelector(".hamburger");
const close = document.querySelector(".closeBtn");
const closemenuaccueil = document.querySelector(".accueil");
const closemenuprojets = document.querySelector(".projets");
const closemenuapropos = document.querySelector(".apropos");
const closemenucontact = document.querySelector(".contact");

monhamberger.addEventListener("click", function(showmenu){
       document.querySelector(".showmenu").style.top = "0vh";
    //    document.querySelector(".menu").style.display = "block";
       // document.querySelector(".hamburger").style.display = "none";
 })
 close.addEventListener("click", function(hidemenu){
        document.querySelector(".showmenu").style.top = "-150vh";
 })
 closemenuaccueil.addEventListener("click", function(hidemenu){
     document.querySelector(".showmenu").style.top = "-150vh";
 })
 closemenuprojets.addEventListener("click", function(hidemenu){
    document.querySelector(".showmenu").style.top = "-150vh";
})
 closemenuapropos.addEventListener("click", function(hidemenu){
     document.querySelector(".showmenu").style.top = "-150vh";
 })


$('.img-parallax').each(function(){
    var img = $(this);
    var imgParent = $(this).parent();
    function parallaxImg () {
      var speed = img.data('speed');
      var imgY = imgParent.offset().top;
      var winY = $(this).scrollTop();
      var winH = $(this).height();
      var parentH = imgParent.innerHeight();
  
  
      // The next pixel to show on screen      
      var winBottom = winY + winH;
  
      // If block is shown on screen
      if (winBottom > imgY && winY < imgY + parentH) {
        // Number of pixels shown after block appear
        var imgBottom = ((winBottom - imgY) * speed);
        // Max number of pixels until block disappear
        var imgTop = winH + parentH;
        // Porcentage between start showing until disappearing
        var imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
      }
      img.css({
        top: imgPercent + '%',
        transform: 'translate(-50%, -' + imgPercent + '%)'
      });
    }
    $(document).on({
      scroll: function () {
        parallaxImg();
      }, ready: function () {
        parallaxImg();
      }
    });
  });

  // dashboard

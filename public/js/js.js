$("#profileBtn").on("click", function(){
    console.log("profile button clicked");
    $.get("/profile").then(function(){
        console.log("/profile hit");
        location.href = "/profile";
    });
});

$("#homeBtn").on("click", function(){
    console.log("home button clicked");
    $.get("/").then(function(){
        console.log("'/' hit");
        location.href = "/";
    })
})

// ****************************************************************
// TO MAKE THE CAROUSEL GO
// ****************************************************************

carousel = (function(){
    var box = document.querySelector('.carouselbox');
    var counter = 0;
    var items = box.querySelectorAll('.content li');
    var current = items[counter];
    box.classList.add('active');
    
    function navigate() {
        // hide the old current list item 
        current.classList.remove('current');
        
        // calculate th new position
        counter ++;
        if (!items[counter]) { 
            counter = 0;
        }
        // set new current element 
        // and add CSS class
        current = items[counter];
        current.classList.add('current');
    }
    
    (setInterval(function(){ navigate(); }, 3000))();

})();



// ******************************************************************************
// SCROLLING AT DIFFERENT SPEEDS
// ******************************************************************************
var instances = [];
$.fn.moveIt = function(){
    var $window = $(window);
  
    $(this).each(function(){
      instances.push(new moveItItem($(this)));
    });
  
    window.onscroll = function(){
      var scrollTop = $window.scrollTop();
      instances.forEach(function(inst){
        inst.update(scrollTop);
      });
    }
}
  
var moveItItem = function(el){
    this.el = $(el);
    this.speed = parseInt(this.el.attr('data-scroll-speed'));
};
  
moveItItem.prototype.update = function(scrollTop){
    var pos = scrollTop / this.speed;
    this.el.css('transform', 'translateY(' + -pos + 'px)');
};
  
$(function(){
    $('[data-scroll-speed]').moveIt();
});

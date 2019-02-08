
  // ****************************************************************
  // WHY DOES IT RENDER INCORRECTLY AT FIRST?!?!?
  // HORRIBLE UX IF THEY DON'T KNOW THEY HAVE TO SCROLL
  // ****************************************************************


$(document).ready(function(){
  $(window).scrollTop(0);
  console.log("scrollTop");

  $("#top").on("click", () => {
    console.log("top");
    $(window).scrollTop(0);
  });

  // function top() {
  //   console.log("top hit");
  //   if($(window).scrollTop() === 0) {

  //   }
  //   // location.reload();
  //   $(window).scrollTop();
  // }
  // top();

  // ****************************************************************
  // PARALLAX SCROLLING
  // ****************************************************************
  
  $(window).bind('scroll',function(e){
    parallaxScroll();
  });
  
  function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    $("#background").css('top',(0 - (scrolled * -.9)) + 'px');
    $('#picture').css('top',(0 - (scrolled * 0)) + 'px');
    $('#name').css('top',(0 - (scrolled * -.1)) + 'px');
    $('#email').css('top',(0 - (scrolled * .9)) + 'px');
    $('#projectCarousel').css('top',(0 - (scrolled * .5)) + 'px');
    $('#elsewhere').css('top',(0 - (scrolled * .7)) + 'px');
    $('#screen').css('top',(0 - (scrolled * 2)) + 'px');
    $('#mission').css('top',(0 - (scrolled * -2)) + 'px');
    $('#keepScrolling').css('top',(0 - (scrolled * 2.1)) + 'px');
    $('#prize').css('top',(0 - (scrolled *.5)) + 'px');
  }

  // ****************************************************************
  // TO MAKE THE CAROUSEL GO
  // ****************************************************************
  
  $('.carousel').carousel();
  
  $(".carousel").on("drag", function(){
      let instance = M.Carousel.getInstance(elem);
      instance.next(3);
  })

  $(".carousel").on("click", ".carBtn", function(){
    // console.log("$this: ", $(this));
    // console.log("this: ", this);
    window.open(this.href);
  })
  
  // ****************************************************************
  // BUTTONS
  // ****************************************************************
  
  $("#profileBtn").on("click", function(event){
    event.preventDefault();
    // console.log("profile button clicked");
    $.get("/profile").then(function(){
        // console.log("/profile hit");
        location.href = "/profile";
    });
  });
  
  $("#homeBtn").on("click", function(event){
    event.preventDefault();
    // console.log("home button clicked");
    $.ajax({
      method: "GET"
    }).then(function(){
      // console.log("/ hit");
      location.href = "/";
    })
  })

  // ****************************************************************
  // MAGNIFIER EFFECT
  // ****************************************************************
  
  function magnify(imgID, zoom) {
    var img, glass, w, h, bw;
    img = document.getElementById(imgID);
  
    /* Create magnifier glass: */
    glass = document.createElement("DIV");
    glass.setAttribute("class", "img-magnifier-glass");
  
    /* Insert magnifier glass: */
    img.parentElement.insertBefore(glass, img);
  
    /* Set background properties for the magnifier glass: */
    glass.style.backgroundImage = "url('" + img.src + "')";
    glass.style.backgroundRepeat = "no-repeat";
    glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
    bw = 3;
    w = glass.offsetWidth / 2;
    h = glass.offsetHeight / 2;
  
    /* Execute a function when someone moves the magnifier glass over the image: */
    glass.addEventListener("mousemove", moveMagnifier);
    img.addEventListener("mousemove", moveMagnifier);
  
    /*and also for touch screens:*/
    glass.addEventListener("touchmove", moveMagnifier);
    img.addEventListener("touchmove", moveMagnifier);
    function moveMagnifier(e) {
      var pos, x, y;
      /* Prevent any other actions that may occur when moving over the image */
      e.preventDefault();
      /* Get the cursor's x and y positions: */
      pos = getCursorPos(e);
      x = pos.x;
      y = pos.y;
      /* Prevent the magnifier glass from being positioned outside the image: */
      if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
      if (x < w / zoom) {x = w / zoom;}
      if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
      if (y < h / zoom) {y = h / zoom;}
      /* Set the position of the magnifier glass: */
      glass.style.left = (x - w) + "px";
      glass.style.top = (y - h) + "px";
      /* Display what the magnifier glass "sees": */
      glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
    }
  
    function getCursorPos(e) {
      var a, x = 0, y = 0;
      e = e || window.event;
      /* Get the x and y positions of the image: */
      a = img.getBoundingClientRect();
      /* Calculate the cursor's x and y coordinates, relative to the image: */
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /* Consider any page scrolling: */
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return {x : x, y : y};
    }
  }


  // ****************************************************************
  // PROJECTS FALLING FROM THE SKY
  // ****************************************************************

  // make a mongo database to store these values then bring them in to populate what's needed
  const projectArray = [
    {
      href: "https://greedy-bastards.herokuapp.com",
      alt: "greedy-bastards icon",
      src: "../images/GreedyBastards2.png",
      repo: "https://github.com/TheFreck/AwesomeFolks"
    },{
      href: "https://login-template-shen.herokuapp.com/",
      alt: "login icon",
      src: "../images/lock.jpg",
      repo: "https://github.com/TheFreck/login-template"
    },{
      href: "https://thefreck.github.io/trainSchedule/",
      alt: "tile for the train scheduler",
      src: "../images/Train.jpg",
      repo: "https://github.com/TheFreck/trainSchedule"
    },{
      href: "https://thefreck.github.io/wordGuessGame/",
      alt: "tile for hangman",
      src: "../images/Hangman.png",
      repo: "https://github.com/TheFreck/wordGuessGame"
    },{
      href: "https://thefreck.github.io/gifmantasticification/",
      alt: "tile for the GIF hunter",
      src: "../images/GIF.png",
      repo: "https://github.com/TheFreck/gifmantasticification"
    },{
      href: "https://github.com/TheFreck/liri-node-app",
      alt: "tile for the liri app",
      src: "../images/q and a.jpg",
      repo: "https://github.com/TheFreck/liri-node-app"
    },{
      href: "https://github.com/TheFreck/word-game",
      alt: "tile for hangman command line",
      src: "../images/Hangman.png",
      repo: "https://github.com/TheFreck/liri-node-app"
    }
  ]

  for(i=0; i<projectArray.length; i++){
    let a = $("<a class='projectDrop' target='blank'></a>");
    // console.log("first a: ", a);
    let speedClass = `a${Math.floor(Math.random() * projectArray.length) + 1}`;
    a.addClass(speedClass);
    let sizeClass = `drop${Math.floor(Math.random() * 4) + 1}`
    // console.log("sizeClass: ", sizeClass);
    a.addClass(sizeClass);
    a.attr("href", projectArray[i].href);
    let img = $('<img class="image">');
    img.attr("alt", projectArray[i].alt);
    img.attr("src", projectArray[i].src);
    let b = $("<a target='blank'>github repo</a>");
    b.attr("href", projectArray[i].href);
    img.append(b);
    a.append(img);
    // console.log("$(a): ", $(a));
    // console.log("a: ", a);
    $(".bigBox").append(a);

  }

});    


$(document).ready(function(){

    $('[data-aos]').each(function(){ $(this).addClass("aos-init"); });

    //메인 메뉴
    $('.menu-toggler').on('click', function(){
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function(){
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    var body=$('html, body')

    $('nav a[href*="#"]').on('click', function () {
        $(body).animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
            }, 2000);
    });

});


// 그래픽 1
$(function(){
    // variable all elements
     var open  = $(".modal_btn1"),
         popup = $(".popup"),
         main  = $(".main"),
         close = $(".close");
  
    // open window when click on open button
     open.on('click', function(){
          main.fadeIn(1000);
          popup.css('transform', 'scale(1, 1.2)');
          popup.animate({width: '1000px'}, 600, function(){
                close.delay(600).fadeIn();
             });
    });
  
    // close window when click on close button
     close.on('click', function(){
          popup.css('transform', 'scale(1, 1)');
          close.delay(100).fadeOut();
          popup.animate({width: '100px'}, 600);
          main.delay(1200).fadeOut();
    });
  
    // close window on click anywhere
    main.on('click', function(){
          popup.css('transform', 'scale(1, 1)');
          close.delay(100).fadeOut();
          popup.animate({width: '100px'}, 600);
          main.delay(1200).fadeOut();
    });
  });
  
  // 그래픽 2
  $(function(){
    // variable all elements
     var open2  = $(".modal_btn2"),
         popup2 = $(".popup2"),
         main2  = $(".main2"),
         close2 = $(".close2");
  
    // open window when click on open button
     open2.on('click', function(){
          main2.fadeIn(1000);
          popup2.css('transform', 'scale(1, 1.2)');
          popup2.animate({width: '1000px'}, 600, function(){
          close2.delay(600).fadeIn();
             });
    });
  
    // close window when click on close button
     close2.on('click', function(){
          popup2.css('transform', 'scale(1, 1)');
          close2.delay(100).fadeOut();
          popup2.animate({width: '100px'}, 600);
          main2.delay(1200).fadeOut();
    });
  
    // close window on click anywhere
    main2.on('click', function(){
          popup2.css('transform', 'scale(1, 1)');
          close2.delay(100).fadeOut();
          popup2.animate({width: '100px'}, 600);
          main2.delay(1200).fadeOut();
    });
  });
  
  // 그래픽 3
  $(function(){
    // variable all elements
     var open3  = $(".modal_btn3"),
         popup3 = $(".popup3"),
         main3  = $(".main3"),
         close3 = $(".close3");
  
    // open window when click on open button
     open3.on('click', function(){
          main3.fadeIn(1000);
          popup3.css('transform', 'scale(1, 1.2)');
          popup3.animate({width: '1000px'}, 600, function(){
          close3.delay(600).fadeIn();
             });
    });
  
    // close window when click on close button
     close3.on('click', function(){
          popup3.css('transform', 'scale(1, 1)');
          close3.delay(100).fadeOut();
          popup3.animate({width: '100px'}, 600);
          main3.delay(1200).fadeOut();
    });
  
    // close window on click anywhere
    main3.on('click', function(){
          popup3.css('transform', 'scale(1, 1)');
          close3.delay(100).fadeOut();
          popup3.animate({width: '100px'}, 600);
          main3.delay(1200).fadeOut();
    });
  });
  
  // 그래픽 4
  $(function(){
    // variable all elements
     var open4  = $(".modal_btn4"),
         popup4 = $(".popup4"),
         main4  = $(".main4"),
         close4 = $(".close4");
  
    // open window when click on open button
     open4.on('click', function(){
          main4.fadeIn(1000);
          popup4.css('transform', 'scale(1, 1.2)');
          popup4.animate({width: '1000px'}, 600, function(){
          close4.delay(600).fadeIn();
             });
    });
  
    // close window when click on close button
     close4.on('click', function(){
          popup4.css('transform', 'scale(1, 1)');
          close4.delay(100).fadeOut();
          popup4.animate({width: '100px'}, 600);
          main4.delay(1200).fadeOut();
    });
  
    // close window on click anywhere
    main4.on('click', function(){
          popup4.css('transform', 'scale(1, 1)');
          close4.delay(100).fadeOut();
          popup4.animate({width: '100px'}, 600);
          main4.delay(1200).fadeOut();
    });
  });
  


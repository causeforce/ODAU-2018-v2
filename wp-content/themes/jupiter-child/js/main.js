$(document).ready(function () {
    
    // Moe's Custom Accordion
    $('h3.moe-accordion-title, h2.moe-accordion-title').addClass('plusTitle');
    $('h3.moe-accordion-title, h2.moe-accordion-title').on('click', function() {
        $(this).siblings('.moe-accordion-content').slideToggle('fast');
        $(this).addClass('active-link');
        $('h3.moe-accordion-title, h2.moe-accordion-title').not(this).removeClass('active-link');
        $(this).toggleClass('minusTitle', 'plusTitle');
    });
    
    // Impact page move accordion into Tab
    $('.faqs_accordion_row').appendTo('#section-impact-tab-01');
    
    // AS A TEAM NAV ACTIVE CLASS
    function firstActive(firstChild, className) {
        $(firstChild).addClass(className);
    }
    firstActive('.as-team-nav div:first-child h4 a', 'active-orange');
    firstActive('.company-nav div:first-child h4 a', 'active-green');
    
    function changeActiveClass(elements, className) {
        $(elements).on('click', function() {
            $(elements).not(this).removeClass(className);
            $(this).addClass(className);
        });
    }
    
    changeActiveClass('.company-nav h4 a', 'active-green');
    changeActiveClass('.as-team-nav h4 a', 'active-orange');

    // Open Accordion on Outfitters Page
    $('.outfitters-accordion-section').removeClass('vc_active');
    
    // Accordion to change into minus on click
//    $('.vc_tta-panel-heading').click(function(){
//       var collapsed=$(this).find('i').hasClass('fa-plus');
//
//        $('.vc_tta-icon').removeClass('fa-minus');
//
//        $('.vc_tta-icon').addClass('fa-plus');
//        if(collapsed){
//            $('.vc_tta-icon',this).toggleClass('fa-plus fa-minus');
//        }
//    });
    
    // View More or View Less for Top List and Text
    $('ul#top-teams, ul#top-fundraising, #top-ambassadors').on('click','.more', function(){

      if( $(this).hasClass('less') ){    
        $(this).text('More...').removeClass('less');    
      }else{
        $(this).text('Less...').addClass('less'); 
      }

      $(this).siblings('li.toggleable').slideToggle();
    });
    
}); // END Document Ready

// Window Load Function
$(window).on("load",function(){
    //Preload to FadeOut on Load
    $('div.spinner').fadeOut('slow');
    $('.preloader-wrapper').css('display', 'none');
    
    // View More or Less Function
    $('ul#top-teams, ul#top-fundraising').each(function(){
  
      var liFind = $(this).find('li').length;

      if( liFind > 10){    
        $('li', this).eq(9).nextAll().hide().addClass('toggleable');
        $(this).append('<li class="more">More...</li>');    
      }

    });
    
    // View More or Less Function for Top Ambassadors
    $('#top-ambassadors').each(function(){
  
      var liFind = $(this).find('dd').length;

      if( liFind > 5){    
        $('dd', this).eq(4).nextAll().hide().addClass('toggleable');
        $(this).append('<dd class="more">More...</dd>');
      }

    });
    
    // View More or Less Plugin
   (function($) {
        $.fn.shorten = function (settings) {

            var config = {
                showChars: 100,
                ellipsesText: "...",
                moreText: "more",
                lessText: "less"
            };

            if (settings) {
                $.extend(config, settings);
            }

            $(document).off("click", '.morelink');

            $(document).on({click: function () {

                    var $this = $(this);
                    if ($this.hasClass('less')) {
                        $this.removeClass('less');
                        $this.html(config.moreText);
                    } else {
                        $this.addClass('less');
                        $this.html(config.lessText);
                    }
                    $this.parent().prev().toggle();
                    $this.prev().toggle();
                    return false;
                }
            }, '.morelink');

            return this.each(function () {
                var $this = $(this);
                if($this.hasClass("shortened")) return;

                $this.addClass("shortened");
                var content = $this.html();
                if (content.length > config.showChars) {
                    var c = content.substr(0, config.showChars);
                    var h = content.substr(config.showChars, content.length - config.showChars);
                    var html = c + '<span class="moreellipses">' + config.ellipsesText + ' </span><span class="morecontent"><span>' + h + '</span> <a href="#" class="morelink">' + config.moreText + '</a></span>';
                    $this.html(html);
                    $(".morecontent span").hide();
                }
            });

        };

     })(jQuery);
    // Class with options for More/Less
    $(".more-less-text>p").shorten({
        "showChars" : 170,
        "moreText"	: "See More",
        "lessText"	: "Show Less",
    });
    $(".more-less-text-french>p").shorten({
        "showChars" : 170,
        "moreText"	: "Lire la suite",
        "lessText"	: "Réduire",
    });
});
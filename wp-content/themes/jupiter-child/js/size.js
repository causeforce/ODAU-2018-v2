$(document).ready(function () {
    
    var windowSize = $(window).width();
    
     // Window Size greater than 782
     if (windowSize > 782) {
         // Sticky Side Nav Area 
        $("ul.mk-tabs-tabs, .e-tab-container>nav, .as-team-nav, .company-nav").stick_in_parent({offset_top: 150});

        $('ul.mk-tabs-tabs, .programs-tabs-link-column, .as-team-nav, .company-nav').on('sticky_kit:bottom', function(e) {
        $(this).parent().css('position', 'static');
        }) 
        $('ul.mk-tabs-tabs, .programs-tabs-link-column, .as-team-nav, .company-nav').on('sticky_kit:unbottom', function(e) {
        $(this).parent().css('position', 'relative');
        });
         
         
        $('.safety-accordion-section, .outfitters-accordion-section').addClass('vc_active');
        // ON SCROLL HIDE LOGO ON SPLASH PAGE
        $(window).scroll(function() {
           if ($(this).scrollTop() > 100 ) {
               $('.page-template-template-splash>div>div>header>div>div>div>div>a>.mk-desktop-logo.dark-logo').fadeOut('slow');
           } else {
               $('.page-template-template-splash>div>div>header>div>div>div>div>a>.mk-desktop-logo.dark-logo').fadeIn('slow');
           } 
        });
    } else {
        // Ambassador page setting variables for rewards
        var bronzeRewards = $('.rewards-01, .rewards-02, .rewards-03, .rewards-04');
        var silverRewards = $('.rewards-01, .rewards-02, .rewards-03, .rewards-05');
        var goldRewards = $('.rewards-01, .rewards-02, .rewards-03, .rewards-06');
        
        var bronzeHeader = '.od-ambassador-bronze h4:first-child';
        var silverHeader = '.od-ambassador-silver h4:first-child';
        var goldHeader = '.od-ambassador-gold h4:first-child';

        // Definiing the rewards titles
        var rewardsBronzeTitle = '<h4 class="text-center bronze-rewards-title">Rewards</h4>';
        var rewardsSilverTitle = '<h4 class="text-center silver-rewards-title">Rewards</h4>';
        var rewardsGoldTitle = '<h4 class="text-center gold-rewards-title">Rewards</h4>';

        // Appending the rewards titles to the appropriate areas
        $(rewardsBronzeTitle).appendTo('.od-ambassador-bronze');
        $(rewardsSilverTitle).appendTo('.od-ambassador-silver');
        $(rewardsGoldTitle).appendTo('.od-ambassador-gold');

        // Cloning and appending rewards into the appropriate areas
        $(bronzeRewards).clone().appendTo('.od-ambassador-bronze');
        $(silverRewards).clone().appendTo('.od-ambassador-silver');
        $(goldRewards).clone().appendTo('.od-ambassador-gold');
        
        // Add +/- to the title
        $(bronzeHeader).addClass('plusTitle');
        $(silverHeader).addClass('plusTitle');
        $(goldHeader).addClass('plusTitle');
        
        // On click show the rewards below function
        function moeAccordion(element, title) {
            $(element).on('click', function() {
                $(this).siblings(title).slideToggle();
                $(this).toggleClass('minusTitle', 'plusTitle');
            });
        };
        // Calling on the click function above with the proper classes
        moeAccordion(bronzeHeader, 'p, .bronze-rewards-title');
        moeAccordion(silverHeader, 'p, .silver-rewards-title');
        moeAccordion(goldHeader, 'p, .gold-rewards-title');

        $('.mobile-nav-tab-container-header>div>div>div>.vc_tta-panel-body').hide();
        // Click function for Tab into Accordion to toggle content //
        $('.title-mobile').click(function (e) {
            e.preventDefault();
            $(this).next('.mk-tabs-pane-content').slideToggle('slow');
            $('.title-mobile').not(this).addClass('display-none');   
            $('.title-mobile').toggleClass('display-none');
        });
        $('.mobile-nav-tab-container').append(jQuery('.mk-tabs-tabs, .programs-tabs-link-column'));
        // Sticky Nav 
        $(".e-tab-container>nav>select").trigger("sticky_kit:detach");
    }
    
    // Window Size 1140
    if (windowSize > 1140) {
        // Area for future scripts if window size is greater than 1140px
    } else {
        // Add Overlay to page body elements
        $('#mk-theme-container').prepend('<div class="mobile-overlay"></div>');
        
        // Mobile Menu Scripts, Add Mobile Image Class
        var mobileButtons = $('.menu-button-links').not('.no-mega-menu');
        $('.header-logo>a>img').addClass('.mobile-img');
        $('ul.mk-responsive-nav').prepend(mobileButtons);
        
        // Mobile Menu Overlay Function
        $('.mk-css-icon-menu').on('click', function(){
           if ( $('.mk-nav-responsive-link').hasClass('is-active') ) {
                $('.mobile-overlay').fadeOut('fast');
            } else {
                $('.mobile-overlay').fadeIn('fast');
            } 
        });
        
        // Append French/English Button for Montreal in mobile
//        var languageButtons = $('.french-btn, .english-btn').not('.no-mega-menu');
//        $('ul.mk-responsive-nav').append(languageButtons);
    }
    
});
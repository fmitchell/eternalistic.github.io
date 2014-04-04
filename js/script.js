/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, window, document, undefined) {


	// Nav toggle
    var $navToggle = $('#nav-toggle');
    $navToggle.click(function(e){
        $(this).toggleClass('active');
        $('#header').toggleClass('expanded');
        $('.menu-blocks', '#header').slideToggle();
        $('html, body').animate({
            scrollTop: $('#page').offset().top
        });
        e.preventDefault();
    });


    // Projects toggle
    var $projectToggle = $('#projects');
    $projectToggle.click(function(e){
        $(this).toggleClass('active');
        $('.projects-menu', '#header').slideToggle();
        e.preventDefault();
    });


    // Infield label
    $(function() {
        $("label.infield").inFieldLabels();
    });


})(jQuery, this, this.document);

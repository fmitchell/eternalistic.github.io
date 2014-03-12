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
	$('#nav-toggle').on('click', function(ev) {
		$(this).toggleClass('active');
		$(".menu-blocks").slideToggle();
		ev.preventDefault();
	});


  // Projects toggle
  $('#projects').on('click', function(ev) {
    $(this).toggleClass('active');
    $(".projects-menu").slideToggle();
    ev.preventDefault();
  });
  

  // Grid toggle
  // $(function() {

  //   $("#gridtoggle").click(function(e) {
  //     $("#grid").toggle();
  //     e.preventDefault();
  //   });

  // });

})(jQuery, this, this.document);

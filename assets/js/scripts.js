// Review Slider
jQuery(document).ready(function () {
    const slider = jQuery('.review-slider');
    if (jQuery.fn.slick && slider.length) {
        slider.slick({
            dots: true,
            infinite: false,
            arrows: false,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true }},
                { breakpoint: 990, settings: { slidesToShow: 2, slidesToScroll: 2 }},
                { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 }},
            ]
        });
    }
    $('.toggle-btn').on('click', function (e) {
        e.preventDefault();
      
        // Find the lender-item-more and lender-card elements
        var $lenderItemMore = $(this).closest('.lender-info').find('.lender-item-more');
        var $lenderCard = $(this).closest('.lender-card');
      
        // Toggle visibility and button text with animation
        $lenderItemMore.stop(true, true).slideToggle('slow', function() {
          // Calculate the reduced width by subtracting 20%
          var cardWidth = $lenderCard.outerWidth() * 0.78; 
      
          $(this).css('width', cardWidth + 'px'); // Adjust width after animation
      
          if ($(this).is(':visible')) {
            $(this).prevAll('.toggle-btn').hide(); 
          } else {
            $(this).prevAll('.toggle-btn').show(); 
          }
        });
      });
      
      // Adjust the width dynamically on window resize
      $(window).on('resize', function () {
        $('.lender-item-more:visible').each(function () {
          var $lenderCard = $(this).closest('.lender-card');
          var cardWidth = $lenderCard.outerWidth() * 0.78; 
          $(this).css('width', cardWidth + 'px'); // Adjust width on resize
        });
      });
    

      $('.menu-toggle').on('click', function () {
        $('body').toggleClass('menu-open'); // Toggle class on the body
        $(this).toggleClass('active'); // Toggle class on the clicked button
    });

// Function to show the modal
function showModal() {
  if (!sessionStorage.getItem("popupClosed")) { // Check if popupClosed is not set in session storage
      $(".confused-modal").fadeIn(500).css("display", "flex"); // Show modal with flex display
      $("body").addClass("popup-active"); // Add class to body
  }
}

// Hide the modal initially
$(".confused-modal").hide();

// Detect when the user is about to leave the page
$(document).on("mouseleave", function (event) {
  if (event.clientY <= 0 && !sessionStorage.getItem("popupClosed")) { // Detect mouse leaves and check session storage
      showModal();
  }
});

// Add a close button event listener
$(".confused-modal .close-button, .btn-close-it").on("click", function () { 
  $(".confused-modal").fadeOut(500, function () {
      $("body").removeClass("popup-active"); // Remove class from body after fadeOut completes
  });
  sessionStorage.setItem("popupClosed", "true"); // Set popupClosed in session storage
});


  // Show the modal after 120 seconds
  // setTimeout(function () {
  //     showModal();
  // }, 120000); 



    
});

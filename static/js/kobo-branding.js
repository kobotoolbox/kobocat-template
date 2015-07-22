$(document).ready(function() {
  $(document).on("click", ".header-bar__top-level-menu-button", function () {
    $('.top-level-menu').toggleClass('is-active');
  });

  $(document).on("click", "li.sidebar-main a", function () {
    $('.sidebar-wrapper').toggleClass('is-active');
    $('body').toggleClass('sidebar-is-active');
  });

  $('table.published_forms__table').footable();
}); 

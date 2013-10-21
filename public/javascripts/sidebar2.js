!function ($) {

  $(function(){

    var $window = $(window)
    var $body   = $(document.body)

    // Allows the sidebar items to be colored (operates on :hover and :active properties?)
    $body.scrollspy({
      target: '.bs-sidebar'
    })

    $window.on('load', function () {
      $body.scrollspy('refresh')
    })

    var $sideBar = $('.bs-sidebar')
    
    // Adjust for the new navbar
    var navHeight = $('.navbar').outerHeight(true);
    var offsetTop = $sideBar.offset().top;
    //$sideBar.top(navHeight + offsetTop);
    $sideBar.offset({ top: navHeight + offsetTop })

    // Was unable to use the bootstrap affix.js functions (strange side-effects when toggling between .affix and .affix-top)
    function lockSidebarWidth() {
      var parent = $sideBar.parent();
      console.log('Adjusting sidebar width: ' + parent.width());
      $sideBar.width(parent.width());
    }

    $window.on("resize", lockSidebarWidth);
    $(document).on("ready", lockSidebarWidth);
})

}(window.jQuery)

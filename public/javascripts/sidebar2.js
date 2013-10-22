!function ($) {

  $(function(){

    var $window = $(window)
    var $body   = $(document.body)
    var $content   = $('#content')

    var $sideBar = $('.bs-sidebar')
    
    // Adjust for the new navbar
    var navHeight = $('.navbar').outerHeight(true);
    var offsetTop = $sideBar.offset().top;

    //$sideBar.offset({ top: navHeight + offsetTop })
    $sideBar.offset({ top: offsetTop })

    // Allows the sidebar items to be colored (operates on :hover and :active properties?)
    $body.scrollspy({
      target: '.bs-sidebar',
      offset: navHeight
    })

    $window.on('load', function () {
      $body.scrollspy('refresh')
    })

    // Was unable to use the bootstrap affix.js functions (strange side-effects when toggling between .affix and .affix-top)
    function lockSidebarWidth() {
      var parent = $sideBar.parent();
      navHeight = $('.navbar').outerHeight(true);
      //console.log('Adjusting sidebar width: ' + parent.width());
      $sideBar.width(parent.width());
    }

    $window.on("resize", lockSidebarWidth);
    $(document).on("ready", lockSidebarWidth);

  })
}(window.jQuery)

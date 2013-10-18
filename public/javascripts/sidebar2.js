!function ($) {

  $(function(){

    var $window = $(window)
    var $body   = $(document.body)

    $body.scrollspy({
      target: '.bs-sidebar'
      , offset: 100
    })

    $window.on('load', function () {
      $body.scrollspy('refresh')
    })

    var $sideBar = $('.bs-sidebar')
    console.log('$sideBar: ' + $sideBar)
    
    var offset = $sideBar.offset()
    var position = $sideBar.position()

    $window.on('scroll', function () { 
      var $sideBar = $('.bs-sidebar')
      var scrollTop = $(this).scrollTop();
      function printSidebar() { return [$sideBar.width(), $sideBar.height(), 
        $sideBar.position().left, $sideBar.position().top,
        $sideBar.offset().left, $sideBar.offset().top ]; }
      console.log(
        'Sidebar (w, h, position, offset): ' + printSidebar() +
        ', $(this).scrollTop(): ' + scrollTop
        )
      //$sideBar.offset({ top: scrollTop + offset.top, left: offset.left })
    })
  })

}(window.jQuery)

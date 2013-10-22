!function ($) {

  $(function(){

    // Adjust for the navbar (probably a better way of doing this). Use #content?
    // Has the advantage of not repeating the height of the navbar (which may change due to stylesheet calculations)
    var navHeight = $('.navbar').outerHeight(true);
    //var content = $('.navbar').next();
    var $content   = $('#content')
    $(content).css('margin-top', navHeight + 'px') // push down the top of the next element (+= next.top-margin()?)

  })
}(window.jQuery)


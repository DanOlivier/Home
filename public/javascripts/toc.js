(function($) {

  function Stack()
  {
    this.stac = new Array();
    this.pop = function() {
      return this.stac.shift();
    }
    this.push = function(item) {
      this.stac.unshift(item);
    }
    this.top = function() {
      return this.stac[0];
    }
    this.length = function() {
      return this.stac.length;
    }
  }

  function IterateHeadings(i, heading, opts, stack) {
    var $h = $(heading);

    var tag = $h[0].tagName.toLowerCase();
    var level = opts.selectors.indexOf(tag)+1;

    while(level > stack.length()) {      
      var top = stack.top();

      //console.log('stack is too small; adding ul node');
      var li = $('> li:last', top);
      if(! $(li).length) {
        //console.log('li child not found; creating new child');
        li =  $('<li/>');
        top.append(li);
      }

      var ul = $('<ul/>');
      if (opts.ulClass) { ul.addClass(opts.ulClass); }
      li.append(ul);

      stack.push(ul);

      top = li = ul = null;
    }
    while(level < stack.length()) { 
      stack.pop(); 
    }

    var anchorName = opts.anchorName(i, tag, level, stack, $h, opts.prefix);

    //build TOC item
    var a = $('<a/>')
      .text(opts.headerText(i, heading, $h))
      .attr('href', '#' + anchorName);

    var li = $('<li/>')
      .addClass(opts.itemClass(i, heading, $h, opts.prefix))
      .append(a);

    var top = stack.top();
    top.append(li);
  }

  $.fn.toc = function(options) {
    var self = this;
    var opts = $.extend({}, jQuery.fn.toc.defaults, options);

    var container = $(opts.container);
    var headings = $(opts.selectors.join(), container);

    //build TOC
    var el = $(this);

    var ul = $('<ul/>');
    if (opts.ulClass) { ul.addClass(opts.ulClass); }
    el.append(ul);

    var stack = new Stack;
    stack.push(ul);

    headings.each(function(i, h) {
        IterateHeadings(i, h, opts, stack);
    });
  };

  jQuery.fn.toc.defaults = {
    container: 'body',
    selectors: ['h1','h2','h3'],
    prefix: 'toc',
    ulClass: '',
    anchorName: function(i, tag, level, stack, $h, prefix) {
      // attach an anchor
      var name = prefix+i
      $('<span/>').attr('id', name).insertBefore($h);
      return name;
    },
    headerText: function(i, heading, $heading) {
      return $heading.text();
    },
    itemClass: function(i, heading, $heading, prefix) {
      return prefix + '-' + $heading[0].tagName.toLowerCase();
    }

  };

})(jQuery);
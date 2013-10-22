// Client-side
var Home = (function() {
  return {
    boot: function( event ) {
      $("#toc").toc({
        'selectors': ['h2','h3'],
        'ulClass': 'nav',
        // custom function for anchor name (may select a different node to attach a link to)
        anchorName: function(i, tag, level, stack, $h, prefix) {
          // attach an anchor
          var name = prefix+i
          $h.parent()
          $('<span/>').attr('id', name).insertBefore($h);
          return name;
        },
        // custom function building the header-item text 
        // (get a shorter name, or attach the anchor to the parent)
        anchorName: function(i, tag, level, stack, $h, prefix) {
          
          // attach an anchor
          var name = prefix+i
          $('<span/>').attr('id', name).insertBefore($h);
          return name;
        },
      });
    }
  }
})();

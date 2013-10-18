var Home = (function() {
  return {
    boot: function( event ) {
      $("#toc").toc({
        'selectors': ['h2','h3'],
        'ulClass': 'nav',
        'anchorName': function(i, heading, prefix) { //custom function for anchor name
          //debugger;
          //console.log('anchorName: ' + i + ', ' + heading.innerText + ', ' + prefix);
          return prefix + i;
        },
        'headerText': function(i, heading, $heading) { //custom function building the header-item text
          //debugger;
          //console.log('headerText: ' + i + ', ' + heading + ', ' + $heading);
          return $heading.text();
        },
        'itemClass': function(i, heading, $heading, prefix) { // custom function for item class
          //debugger;
          //console.log('itemClass: ' + i + ', ' + heading + ', ' + $heading + ', ' + prefix);
          //return $heading[0].tagName.toLowerCase();
        }        
      });
    }
  }
})();

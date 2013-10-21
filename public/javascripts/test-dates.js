var moment = require('moment')
var i18n = require('i18next')
var dateHelpers = require('./dateHelpers.js')

var options = {
  saveMissing: false,
  debug: true,
  lng: 'fr',
  preload: ['en', 'fr'],
  fallbackLng: false
}

i18n.init(options, function(t) {
	// We use a callback in order to ensure that the resources are loaded before continuing
  i18n.lng();

  //i18n.setLng('fr');
  moment.lang('fr');
  dateHelpers.formatString("MM-YYYY")

  function test(b) {
    console.log('Test says precise=' + b)
    console.log(dateHelpers.dateHelper2([2011, 07], [2012, 12], b))
    console.log(dateHelpers.dateHelper2([2010, 02], [2011, 03], b))
    console.log(dateHelpers.dateHelper2([2004, 09], [2009, 08], b))
    console.log(dateHelpers.dateHelper2([2003, 06], [2003, 11], b))
    console.log(dateHelpers.dateHelper2([2002, 04], [2003, 04], b))
    console.log(dateHelpers.dateHelper2([2000, 08], [2001, 07], b))
    console.log(dateHelpers.dateHelper2([1999, 07], [2000, 07], b))
    console.log(dateHelpers.dateHelper2([1997, 03], [1999, 06], b))
    console.log(dateHelpers.dateHelper2([1996, 07], [1997, 02], b))
    console.log(dateHelpers.dateHelper2([1993, 11], [1996, 07], b))
  }
  test(true)
  test(false)
});

var i18n = require('i18next')
var moment = require('moment');

var formatString = "MMM, YYYY";

// Duration will save the original endpoints
function Duration(begin, end) {
  this.date1 = new Date(begin);  // Convert to Date such that the months start at index 1
  this.date2 = new Date(end);
  this.moment = moment(end).diff(begin);
  this.formatString = formatString;
}

// class methods
Duration.prototype.calcDuration = function (precise) {
  // Ideally, the greater the time difference, the greater the rounding effect
  precise = (typeof precise !== 'undefined') ? precise : false;
  
  // inclusive of starting and ending months
  var m = moment.duration(this.moment).as('months');
  var y = Math.floor(m/12)
  m = m % 12;
  var save = [y,m];
  if(!precise) {
    // Round at +/- 1 month-precision on 6-month boundaries
    var zeroToThree = Math.abs((m%6)-3);
    if(zeroToThree > 2) { 
      m = Math.round(m/2)*2; // Round to the boundary
    }
  }
  m = Math.round(m);
  if(m == 12) { m = 0; y = y + 1 }
  //console.log('(y,m) ==> (y,m) = (' + save + ') ==> (' + [y,m] + ')')
  return [y,m];
}

Duration.prototype.formatRange = function() {
  //console.log('Current i18n language:' + i18n.lng())
  var dstr = i18n.t('app.from') + ' ' + moment(this.date1).format(formatString) + ' ' + 
    i18n.t('app.to') + ' ' + moment(this.date2).format(formatString)
  return dstr;
}

// static methods
function formatDuration(ym) {
  var y = ym[0], m = ym[1];
  var dstr = '';
  if(y > 0) { dstr = y + ' ' + i18n.t("app.year", {count:y}) }
  if(y > 0 && m > 0) { dstr = dstr + ' ' + i18n.t('app.and') + ' ' }
  if(m > 0) { dstr = dstr + m + ' ' + i18n.t("app.month", {count:m}) }
  return '(' + dstr + ')';    
}

module.exports = {
  Duration: Duration,
  formatString: function(str) {
    return (formatString = str);
  },
  formatDate: function (begin) {
    return moment(new Date(begin)).format(formatString);
  },
  formatDuration: formatDuration,
  getRangeAndDuration: function(begin, end, precise) {
    var d = new Duration(begin, end)

    var ym = d.calcDuration(precise)
    return [d.formatRange(), formatDuration(ym)];
  }
}
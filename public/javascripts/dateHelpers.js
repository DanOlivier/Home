var i18n = require('i18next')
var moment = require('moment');

var formatString = "MMM, YYYY";

// Duration will save the original endpoints
function Duration(begin, end) {
  this.date1 = new Date(begin);  // Convert to Date such that the months start at index 1
  this.date2 = new Date(end);
  this.moment = moment(end).diff(begin);
}

module.exports = {
  formatString: function(str) {
    return (formatString = str);
  },
  dateHelper: function (begin) {
    return moment(new Date(begin)).format(formatString);
  },
  calcDuration: function (d, precise) {
    // Ideally, the greater the time difference, the greater the rounding effect
    precise = typeof precise !== 'undefined' ? precise : false;
    
    // inclusive of starting and ending months
    var m = moment.duration(d.moment).as('months');
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
  },
  dateHelper2: function(begin, end, precise) {
    var d = new Duration(begin, end)

    var ym = this.calcDuration(d, precise)
    return this.formatDurationSpan(d);// + ' ' + this.formatDuration(ym);
  },
  formatDuration: function(ym) {
    var y = ym[0], m = ym[1];
    var dstr = '';
    if(y > 0) { dstr = y + ' ' + i18n.t("app.year", {count:y}) }
    if(y > 0 && m > 0) { dstr = dstr + ' ' + i18n.t('app.and') + ' ' }
    if(m > 0) { dstr = dstr + m + ' ' + i18n.t("app.month", {count:m}) }
    return '(' + dstr + ')';    
  },
  formatDurationSpan: function(d) {
    //console.log('Current i18n language:' + i18n.lng())
    var dstr = i18n.t('app.from') + ' ' + moment(d.date1).format(formatString) + ' ' + 
      i18n.t('app.to') + ' ' + moment(d.date2).format(formatString)
    return dstr;
  }
}

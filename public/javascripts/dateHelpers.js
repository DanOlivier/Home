var formatString = "MMM, YYYY";
module.exports = {
  formatString: function(str) {
    return (formatString = str);
  },
  dateHelper: function (begin) {
    return moment(new Date(begin)).format(formatString);
  },
  dateHelper2: function (begin, end, precise) {
    // Ideally, the greater the time difference, the greater the rounding effect
    precise = typeof precise !== 'undefined' ? precise : false;

    var date1 = new Date(begin);  // Convert to Date such that the months start at index 1
    var date2 = new Date(end);
    var d = moment(date2).diff(date1);
    
    // inclusive of starting and ending months
    var m = moment.duration(d).as('months');
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
    var dstr = '';
    if(y>0) { dstr = y + ' ' + ((y>1)?'ans':'an') }
    if(y>0 && m>0) { dstr = dstr + ' et ' }
    if(m>0) { dstr = dstr + m + ' mois' }
    return 'De ' + moment(date1).format(formatString) +
           ' à ' + moment(date2).format(formatString) + 
            ' (' + dstr + ')';
  }
}

module.exports = {
  supportedLngs: function() { 
    return [
      'en-CA', 
      //'en-US', 
      //'en-UK', 
      'fr-CA', 
      //'fr-FR'
      ] },
  ConvertToSVGPath: function(lang) {
    switch(lang)
    {
    case 'en':
    case 'en-CA':
      return 'svg/ca.svg'
    case 'en-US':
      return 'svg/us.svg'
    case 'en-UK':
      return 'svg/uk.svg'
    case 'fr-FR':
      return 'svg/fr.svg'
    case 'fr':
    case 'fr-CA':
      return 'svg/ca-qc.svg'
    default:
      console.log('Language ' + lang + ' not supported')
    }
  }
}

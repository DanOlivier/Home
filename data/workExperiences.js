var i18n = require('i18next')
var dateHelpers = require('../public/javascripts/dateHelpers');

// Need to make this file completely i18nbusiness (Healthcare management software)
module.exports = {
  workExperiences: {
    sgcib: {
      workid: 'sgcib',
      range: dateHelpers.getRangeAndDuration([2011, 07], [2012, 12]),
      href: 'http://www.sgcib.com/',
      shortName: 'SGCIB',
      longName: 'Société Générale, Corporate Investment Bank',
      location: 'Paris, France',
      title: 'Ingénieur Étude et développement C++',
      techenv:'\
ul\n\
  li C++ (VS 2008, 2010), C++/CLI, C# .Net, Java\n\
  li Boost, Rogue Wave, Xerces XML, OCI (Oracle Call Interface) + OCCI, Google Protobuf, Log4Net, JNI\n\
  li\n\
    a(href="http://www.doxygen.org") DOxygen\n\
    |, \n\
    a(href="http://git-scm.com") Git\n\
    |, \n\
    a(href="http://www.platform.com/Products/platform-symphony") Symphony\n\
    |, \n\
    a(href="http://www.gigaspaces.com/") Gigaspaces\n'
    },
    ifcs: {
      workid: 'ifcs',
      range: dateHelpers.getRangeAndDuration([2010, 02], [2011, 03]),
      shortName: 'IFCS',
      description: '(SSII canadienne)',
      location:  'Paris, France',
      title: 'Ingénieur Étude et développement C++',
      techenv: ''
    },
    cmlabs: {
      workid: 'cmlabs',
      range: dateHelpers.getRangeAndDuration([2004, 09], [2009, 08]),
      href: 'http://www.vxsim.com',
      shortName: 'CM Labs',
      business: 'Physics middleware (Vortex C++ SDK), robotics, mecanical simulation, serious games',
      location: i18n.t('app.montreal'),
      title: 'Ingénieur Études et Développement senior C++',
      techenv: 'p C++, Linux, Windows, cygwin, Qt, wxWidgets, Lua, tolua++'
    },
    timespring: {
      workid: 'timespring',
      range: dateHelpers.getRangeAndDuration([2003, 06], [2003, 11]),
      location: i18n.t('app.montreal'),
      shortName: 'TimeSpring Software',
      //description: jade2.render('xyz') ???
      description: '(aujourd\'hui <a href="http://www.visionsolutions.com/">DoubleTake</a>)',
      business: 'Storage management, backup, file-system drivers, continuous data protection',
      title: 'Ingénieur Études et Développement senior C++',
      techenv:'\
p C++ (VC7), Boost, STL, ACE, cygwin (make, bash, sed, awk, cvs), \n\
p C#, DotNet, XML, XSLT, HTML, CVS, DDK, SoftICE'
    },
    visualmed: {
      workid: 'visualmed',
      range: dateHelpers.getRangeAndDuration([2002, 04], [2003, 04]),
      location: i18n.t('app.montreal'),
      shortName: 'VisualMED',
      business: 'Healthcare management software',
      title: 'Ingénieur Étude et développement C/C++',
      techenv: 'p Delphi v6 + VCL, C/C++ (VC7), COM+, Oracle + Toad, Wise, Express QuantumGrid'
    },
    rational: {
      workid: 'rational',
      range: dateHelpers.getRangeAndDuration([2000, 08], [2001, 07]),
      href :'http://www.ibm.com/software/products/us/en/ratirosefami',
      shortName: 'Rational Software',
      longName: '(Rose Business Unit)',
      business: 'Visual software modeling and design tools',
      location:  'Redmond, WA (USA)',
      title: 'Ingénieur Étude et développement',
      techenv: '\
p Rose, UML, XDE, ClearCase, ClearQuest,\n\
p MSDev 6, Visual Studio 7, VB, COM (MIDL), Perl (ActiveState), Websphere Studio, Visual J++, Jbuilder, JSDK, JIntegra, cygwin'
    },
    microsoft: {
      workid: 'microsoft',
      range: dateHelpers.getRangeAndDuration([1999, 07], [2000, 07]),
      href: 'http://www.microsoft.com',
      shortName: 'Microsoft',
      location:  'Redmond, WA (USA)',
      title: 'Ingénieur support',
      techenv: '\
p VC6, Windbg, cdb, ntsd, kd, Boundschecker, Bugtrapper, IDA (Interactive Disassembler), Detours, API hooking (IAT thunking), VC6, Win32, Platform SDK\n\
p Full range of Microsoft development tools: VC6, VC7, Win32, Platform SDK, RAID (bug management), SourceDepot (source code control), build process'
    },
    srtelecom: {
      workid: 'srtelecom',
      range: dateHelpers.getRangeAndDuration([1997, 03], [1999, 06]),
      href: 'http://www.srtelecom.com',
      shortName: 'SR Telecom',
      location:  'Ville Saint-Laurent, QC',
      title: 'Ingénieur Étude et développement C++',
      techenv: 'p Visual C++, Win32, MFC, STL, Corba, ACE, OOP, design patterns, Borland C++, Checkmate ICE, UART, TMN, JIDM'
    },
    lansertech: {
      workid: 'lansertech',
      range: dateHelpers.getRangeAndDuration([1996, 07], [1997, 02]),
      shortName: 'Lanser Technologies',
      location:  'Westmount, QC',
      title: 'Ingénieur Étude et développement C++',
      techenv: 'p C/C++, Sun/Solaris, Sparcworks, Sun Net Manager'
    },
    nbstech: {
      workid: 'nbstech',
      range: dateHelpers.getRangeAndDuration([1993, 11], [1996, 07]),
      href: "http://www.nbstech.com/",
      shortName: 'NBS Technologies',
      location:  'Ville Mont-Royal, QC',
      title: 'Ingénieur Étude et Développement C/C++',
      techenv: 'p C/C++, asm 68K, MC68302, outils Microtec, XRAY, asm 80x86, MFC'
    },
    stejustine: {
      workid: 'stejustine',
      range: ['Stage d\'été, 1992', '4 mois'],
      href: "http://www.kinesio.umontreal.ca/autres_pages/st_justine.htm",
      shortName: 'Hôpital Sainte-Justine',
      longName: 'Laboratoire d’Étude du Mouvement',
      description: '(kinésiologie)',
      location:  'Montréal, QC',
      title: 'Dévelopeur-apprenti C',
      techenv:'p C, Xlib, SUN, XWindows'
    }
  }
}
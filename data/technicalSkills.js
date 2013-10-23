var i18n = require('i18next')
var jade = require('jade')

module.exports = {
  technicalSkills: {
    sectionid: 'technical-skills',
    title: i18n.t('app.technicalskills'),
    skills: [
      {
        name: i18n.t('tech.systems'),
        jade: '\
p Windows (3.1, NT, 2000, XP, Vista, 7), cygwin\n\
p Linux (CentOS, Ubuntu, Red Hat, Fedora, Solaris)\n\
p Various custom/proprietary, embedded systems'
      },
      {
        name: i18n.t('tech.languages'),
        jade: '\
p\n\
strong OOP: \n\
|  C/C++, C#.NET, Delphi, Java\n\
p\n\
strong scripting, CLI: \n\
|  Bash, Python, Perl, Lua, Power Shell, SQL\n\
p\n\
strong assembler: \n\
|  x86, M68K'
      },
      {
        name: i18n.t('tech.libraries'),
        jade: '\
p\n\
strong General: \n\
|  STL, Boost, template, Win32, pthreads, Rogue Wave\n\
p\n\
strong GUI: \n\
|  MFC, WxWidgets, Qt, Ilog\n\
p\n\
strong Comm : \n\
a(href="http://code.google.com/p/protobuf/") Protobuf\n\
|, \n\
a(href="http://www.cs.wustl.edu/~schmidt/ACE.html") Ace/Tao/Corba\n\
|, \n\
a(href="http://www.boost.org/") Boost \n\
|  (Serialisation, ASIO)\n\
p\n\
strong Graphics: \n\
a(href="http://www.opengl.org") OpenGL\n\
|, \n\
a(href="http://www.openscenegraph.org") OSG (Open Scene Graph)\n\
|, \n\
a(href="http://www.presagis.com/products_services/products/modeling-simulation/visualization/vega_prime/") VegaPrime\n\
|  + \n\
a(href="http://www.presagis.com/products_services/products/modeling-simulation/content_creation/creator/") Creator\n\
|  (\n\
a(href="http://www.presagis.com/") Multigen/Presagis\n\
|), \n\
a(href="http://www.vtk.org") VTK\n\
p\n\
strong Others:\n\
|  OpenAL (audio)'
      },
      {
        name: i18n.t('tech.databases'),
        content: 'Oracle (SQL Developer), Sybase, Toad'
      },
      {
        name: i18n.t('tech.methods'),
        content: 'UML, Rational Rose, Design Patterns'
      },
      {
        name: i18n.t('tech.tools'),
        jade: '\
p Visual Studio, Eclipse (Java, CDT), NetBeans, Qt Creator\n\
p Others: Debugging Tools for Windows, gdb, Purify, Quantify, BoundsChecker, VTune, valgrind'
      },
      {
        name: i18n.t('tech.config'),
        jade:'\
p git, CVS, SVN, Clearcase, Clearquest\n\
p: make (gmake, cmake, nmake, vcbuild, scons, bjam, gyp), TeamCity, github'
      },
      {
        name: i18n.t('tech.web')
      }
    ]
  }
}
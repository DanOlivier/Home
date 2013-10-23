var technicalSkills = (function() {
  return {
    sectionid: 'technical-skills',
    title: i18n.t('app.technicalskills'),
    skills: [
      {
        name: i18n.t('tech.systems'),
        jade: '\
p Windows (3.1, NT, 2000, XP, Vista, 7), cygwin
p Linux (CentOS, Ubuntu, Red Hat, Fedora, Solaris)
p Various custom/proprietary, embedded systems'
      },
      {
        name: i18n.t('tech.languages')
        jade: '\
p
  strong OOP: 
  |  C/C++, C#.NET, Delphi, Java
p
  strong scripting, CLI: 
  |  Bash, Python, Perl, Lua, Power Shell, SQL
p
  strong assembler: 
  |  x86, M68K'
      },
      {
        name: i18n.t('tech.libraries'),
        jade: '\
p
  strong General: 
  |  STL, Boost, template, Win32, pthreads, Rogue Wave
p
  strong GUI: 
  |  MFC, WxWidgets, Qt, Ilog
p
  strong Comm : 
  a(href="http://code.google.com/p/protobuf/") Protobuf
  |, 
  a(href="http://www.cs.wustl.edu/~schmidt/ACE.html") Ace/Tao/Corba
  |, 
  a(href="http://www.boost.org/") Boost 
  |  (Serialisation, ASIO)
p
  strong Graphics: 
  a(href="http://www.opengl.org") OpenGL
  |, 
  a(href="http://www.openscenegraph.org") OSG (Open Scene Graph)
  |, 
  a(href="http://www.presagis.com/products_services/products/modeling-simulation/visualization/vega_prime/") VegaPrime
  |  + 
  a(href="http://www.presagis.com/products_services/products/modeling-simulation/content_creation/creator/") Creator
  |  (
  a(href="http://www.presagis.com/") Multigen/Presagis
  |), 
  a(href="http://www.vtk.org") VTK
p
  strong Others:
  |  OpenAL (audio)'
      },
      {
        name: i18n.t('tech.databases'),
        content: { "Oracle (SQL Developer), Sybase, Toad" }
      },
      {
        name: i18n.t('tech.methods')
        content: "UML, Rational Rose, Design Patterns"
      },
      {
        name: i18n.t('tech.tools'),
        jade: '\
p Visual Studio, Eclipse (Java, CDT), NetBeans, Qt Creator
p Others: Debugging Tools for Windows, gdb, Purify, Quantify, BoundsChecker, VTune, valgrind'
      },
      {
        name: i18n.t('tech.config'),
        jade:'\
p git, CVS, SVN, Clearcase, Clearquest
p: make (gmake, cmake, nmake, vcbuild, scons, bjam, gyp), TeamCity, github'
      },
      {
        name: i18n.t('tech.web')
      },
    ]
  }
})();

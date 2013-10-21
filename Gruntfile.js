module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    webfont: {
      icons: {
        //src: 'public/iso-country-flags-svg-collection/svg/country-4x3/*.svg',
        src: 'public/svg/*.svg',
        dest: 'public/fonts',
        destCss: 'public/stylesheets',
        options: {
          font: 'MyFlags',
          stylesheet: 'less',
          hashes: false,
          syntax: 'myflags',
          template: 'public/svg/myflags-template.css'
          //relativeFontPath: '/build/fonts'
        }
      },
    },
    jade: {
      compile: {
          expand: true,
          src: "public/svg/*.jade",
          ext: ".svg",
        options: {
          data: {
            debug: false
          }
        },
      }
    },
    nodemon: {
      dev: {}
    },
    watch: {
      icons: {
        files: ['public/svg/*.jade'],
        tasks: ['jade'],
        options: {
          spawn: true,
        },
      },
    },    
  });

  grunt.event.on('watch', function(action, filepath, target) {
    grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
  });
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);
  
  grunt.loadNpmTasks('grunt-webfont');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-contrib-watch');
};

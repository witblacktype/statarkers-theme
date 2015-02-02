module.exports = function(grunt) {

  // Project configuration.
grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: [
          'bower_components/jquery/dist/jquery.js',
          'bower_components/fitvids/jquery.fitvids.js',
          'bower_components/FlexSlider/jquery.flexslider.js',
          'js/app/<%= pkg.name %>.js'
        ],
        dest: 'js/build/<%= pkg.name %>.js',
      },
    },

    uglify: {
      target: {
        options: {
          sourceMap: true
        },
        files: {
          'js/<%= pkg.name %>.js': ['js/build/<%= pkg.name %>.js']
        }
      }
    },

    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'css/<%= pkg.name %>.css': 'sass/<%= pkg.name %>.scss' // 'destination': 'source'

        }
      }
    },

    watch: {
      scripts: {
        files: ['js/**/*.js'],
        tasks: ['concat','uglify'],
        options: {
          spawn: false,
          livereload: 35729
        }
      },

      css: {
        expand: true,
        files: 'sass/**/*.scss',
        tasks: ['sass'],
        options: {
          spawn: false,
          livereload: 35729
        }
      }
  }

  });

  // Load the plugin that provides the tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['concat','uglify','sass']);

};

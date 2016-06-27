module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'public/css/styles.css': 'public/sass/styles.scss',
          'public/css/color.css': 'public/sass/color.scss',
          'public/css/gridstyles.css': 'public/sass/gridstyles.scss'
        }
      }
    },
    watch: {
      source: {
        files: ['public/sass/*.scss'],
        tasks: ['sass'],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.registerTask('default', ['sass']);
};
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
     bower: {
      install: {
        options: {
          targetDir: './lib',
          install: true,
          verbose: false,
          cleanTargetDir: true,
          cleanBowerDir: true
      }
      }
    },
    copy: {
      main: {
        expand: true,
        cwd: 'lib/',
        src: '**',
        dest: 'public/lib/',
        filter: 'isFile'
      },
      sources: {
        expand: true,
        cwd: 'src/',
        src: '**',
        dest: 'public/app/',
        filter: 'isFile'
      }
     } ,
      shell: {
        node_start: {
           options: {                    
                stdout: true
            },
          command: 'supervisor server.js'
        }
      }
  });

  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', ['bower','copy:main','copy:sources','shell:node_start']);

};
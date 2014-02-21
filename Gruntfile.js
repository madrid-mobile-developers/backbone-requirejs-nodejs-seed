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
      lib: {
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
      },
      bundle:{
        cwd: './public',
        src:'**',
        dest: '../bundle/www',
        filter: 'isFile',
        expand: true
      }
     } ,
      shell: {
        node_start: {
           options: {                    
                stdout: true
            },
          command: 'supervisor server.js'
        },
        bundle_deploy:{
          options: {                    
                stdout: true
            },
          command: 'supervisor server.js'
        }
      },
      karma: {
          unit: {
              configFile: './karma.conf.js'
          }
      },
      clean: {
          sources: {
              src: ['public/app/**'],
              force: true
          },
          lib: {
              src: ['public/lib/**'],
              force: true
          }
      }
  });

  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('default', ['bower','copy:lib','copy:sources']);
  grunt.registerTask('dev_deploy', ['karma:unit', 'clean:lib', 'copy:lib', 'clean:sources', 'copy:sources']);
  grunt.registerTask('deploy', ['karma:unit', 'clean:lib', 'copy:lib', 'clean:sources', 'copy:sources', 'copy:bundle']);
};
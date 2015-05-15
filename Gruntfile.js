/* global module */
module.exports = function (grunt) {
  module.require('time-grunt')(grunt);

  var pkg = grunt.file.readJSON('package.json');
  grunt.initConfig({
    pkg: pkg,

    'nice-package': {
      all: {
        options: {
          blankLine: true
        }
      }
    },

    jshint: {
      'options': {
        jshintrc: '.jshintrc'
      },
      default: {
        'src': [ '*.js', 'test/*.js', '!umd-template.js' ]
      }
    },

    sync: {
      all: {
        options: {
          sync: ['author', 'name', 'version',
            'private', 'license', 'keywords', 'homepage'],
        }
      }
    },

    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/*.js']
      }
    },

    'clean-console': {
      all: {
        options: {
          url: ['index.html'],
          timeout: 1
        }
      }
    },

    karma: {
      unit: {
        configFile: 'karma.conf.js',
        background: false,
        singleRun: true,
        logLevel: 'INFO',
        browsers: ['PhantomJS']
      }
    },

    watch: {
      options: {
        atBegin: true
      },
      all: {
        files: ['*.js', 'test/*.js', 'index.html'],
        tasks: ['git-rev-parse', 'umd_wrapper', 'jshint', 'test']
      }
    },

    umd_wrapper: {
      options: {
        template: 'umd-template.js',
        version: pkg.version
      },
      all: {
        files: {
          'fe.js': 'index.js'
        }
      }
    },

    'git-rev-parse': {
      build: {
        options: {
          prop: 'git-revision',
          number: 6
        }
      }
    }
  });

  var plugins = module.require('matchdep').filterDev('grunt-*');
  plugins.forEach(grunt.loadNpmTasks);

  grunt.registerTask('test', ['mochaTest', 'karma', 'clean-console']);
  grunt.registerTask('default', ['deps-ok', 'git-rev-parse', 'nice-package', 'sync', 'umd_wrapper', 'jshint', 'test']);
};

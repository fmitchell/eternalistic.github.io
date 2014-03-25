module.exports = function(grunt) {

    // Load all NPM grunt tasks
    require('matchdep').filterAll('grunt-*').forEach(grunt.loadNpmTasks);

    // Theme path
    $themepath = '';

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Concatenate JS
        concat: {   
            dist: {
                src: [
                    'js/jquery.infieldlabel.min.js',
                    'js/script.js'
                ],
                dest: 'js/build/production.js',
            }
        },

        // Uglify JS
        uglify: {
            build: {
                src: 'js/build/production.js',
                dest: 'js/build/production.min.js'
            }
        },

        // Image optimization
        // imageoptim: {
        //   myTask: {
        //     options: {
        //       jpegMini: false,
        //       imageAlpha: true,
        //       quitAfter: true
        //     },
        //     src: ['images']
        //   }
        // },

        // Compass & SASS
        compass: {
            options: {
                bundleExec: true,
                relativeAssets: true,
                httpPath: $themepath,
                cssDir: 'css',
                sassDir: 'sass',
                imagesDir: 'images',
                javascriptsDir: 'js',
                // fontsDir: 'fonts',
                assetCacheBuster: 'none',
                require: [
                      'breakpoint', 
                      'sass-globbing', 
                      'singularitygs', 
                      'rgbapng', 
                      'toolkit',
                ]
            },

            // Production
            prod: {
                options: {
                    environment: 'production',
                    outputStyle: 'compressed',
                    force: true,
                }
            },
        },

        // Run Jekyll commands
        jekyll: {
          server: {
            options: {
              serve: true,
              // Add the --watch flag, i.e. rebuild on file changes
              watch: true
            }
          },
          build: {
            options: {
              serve: false
            }
          }
        },

        // Watch
        watch: {

            // CSS
            css: {
                files: [
                    '**/*.scss',
                ],
                tasks: ['compass'],
                options: {
                    spawn: false,
                },
            },

            // Javascript
            scripts: {
                files: ['js/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                },
            },

            jekyll: {
                files: ['*.md'],
                tasks: ['jekyll-production']
            },
            
            // Live Reload
            options: {
                livereload: true,
            },

            // Images
            images: {
                files: ['**/*.{png,jpg}'],
                tasks: ['imageoptim'],
                options: {
                    spawn: false,
                },
            },
        }

    });

    // Alias to `grunt jekyll:server`
    grunt.registerTask('server', 'jekyll:server');

    // Run Jekyll build with environment set to production
    grunt.registerTask('jekyll-production', function() {
        grunt.log.writeln('Setting environment variable JEKYLL_ENV=production');
        process.env.JEKYLL_ENV = 'production';
        grunt.task.run('jekyll:build');
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-imageoptim');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', [
        'compass', 
        'concat', 
        'uglify', 
        'imageoptim',
        'jekyll-production',
    ]);

};
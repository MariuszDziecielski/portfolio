'use strict';

module.exports = grunt => {
	const sass = require('node-sass');

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		sass: {
			options: {
				implementation: sass,
				sourceMap: true,
				outputStyle: 'expanded'
			},
			dist: {
				files: {
					'css/style.css': 'sass/style.sass'
				}
			}
		},
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'img/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'images/'
				}]
			}
		},
		jshint: {
			all: ['js/script.js'],
			options: {
				'esversion': 6
			}
		},
		watch: {
			sass: {
				files: ['sass/*.sass'],
				tasks: ['sass'],
				options: {
					spawn: false
				}
			},
			jshint: {
				files: ['js/script.js'],
				tasks: ['jshint'],
				options: {
					spawn: false
				}
			}
		},
		browserSync: {
			dev: {
				bsFiles: {
					src: [
						'css/*.css',
						'js/*.js',
						'*.html'
					]
				},
				options: {
					watchTask: true,
					server: true,
					browser: ['chrome']
				}
			}
		}
	});

	grunt.registerTask('default', ['imagemin', 'sass', 'jshint', 'browserSync', 'watch']);
};
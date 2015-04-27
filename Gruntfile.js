/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
  
	copy:{
	    html: {
	    	src: 'app/index.html', dest: 'dist/index.html'
	    }
	},
	
	useminPrepare: {
		html: 'app/index.html',
		options: {
			dest: 'dist'
		}
	},
	usemin: {
		html: 'dist/index.html',
		options: {
		
		}
	}
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');  
  grunt.loadNpmTasks('grunt-usemin');

  
  // simple build task 
	grunt.registerTask('use', [
	  'copy:html',
	  'useminPrepare',
	  'concat:generated',
	  'cssmin:generated',
	  'uglify:generated',
	  'usemin'
	]);

};

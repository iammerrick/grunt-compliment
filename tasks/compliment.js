module.exports = function(grunt) {
  grunt.registerTask('compliment', 'Treat yo\' self!', function() {
    var defaults = [
      'You are so awesome!',
      'You remind me of Brad Pitt, only you have a better body.',
      'You are a funny, funny kid.'
    ];
    
    var compliments = grunt.config('compliment') || defaults;
    var index = Math.floor(Math.random() * compliments.length);
    
    grunt.log.writeln(compliments[index]);
  });
};
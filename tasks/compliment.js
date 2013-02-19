module.exports = function(grunt) {
  grunt.registerTask('compliment', 'Treat yo\' self!', function() {
    var defaults = [
      'You are so awesome!',
      'You remind me of Brad Pitt, only you have a better body.',
      'You are a funny, funny kid.',
      'Looks like you\'ve NPM install\'ed grunt-awesome',
      'You\'re good to go, chief!',
      'Someone has a one-way ticket to a sweet, sweet commit',
      'DID YOU JUST FINISH ANOTHER GRUNT BUILD? HELL YEAH YOU DID!',
      'Score another one for the good guys.',
      'What skill, and bravery, you have.'
    ];
    
    var compliments = grunt.config('compliment') || defaults;
    var index = Math.floor(Math.random() * compliments.length);
    
    grunt.log.writeln(compliments[index]);
  });
};
## Compliment

grunt-compliment is a grunt task that dishes out a compliment whenever you need it. This is a reference project for an article I wrote called [Grunt.js Workflow](http://merrickchristensen.com/articles/gruntjs-workflow.html).

### Installation

  npm install grunt-compliment

### Setup

```javascript
grunt.initConfig({
  compliment: [
    'You are the greatest!',
    'Please, don\'t ever leave. You give me purpose.'
  ]
});

grunt.loadNpmTasks('grunt-compliment');
```


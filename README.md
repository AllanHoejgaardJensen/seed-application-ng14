# seed-application-ng14
A simple seed application based on Angular 1.4

##Status:
 - end2end testing has an issue on Mac OSX
 - the setup used her sometimes causes an empty index.html file
   (workaround: be sure to preserve local copy until error is solved)
 - the setup used here is not resistent towards errors in scss files, that makes the livereload fail. 
   (workaround: type gulp on the command line again - is you use autosave - you may to turn that off)
   
##Before it runs:
 - make sure you have node installed (0.10.38)
 - make sure that you have git
 - make sure you have have gems
 - gem install scss-lint
 - 
 
##Set up
 - type "npm install" on the command line

##Start it
 - type "gulp" or ./node_modules/gulp/bin/gulp.js

##Other commands:
  
  - "gulp" runs all tests and starts the server with live reload
  - "gulp server" starts the server
  - "gulp lint" - which checks the code against the best practices in eslint (including angular patterns by john papa)
  - "gulp test" runs karma tests
  - "gulp dist" creates a distribution edition of the application
  - "gulp e2e-test" runs protractor tests (see status!)
  
  
  

 

var gulp = require('gulp');
var gutil = require('gulp-util');
var runSequence = require('run-sequence');


function runStaticCodeAnalysis(){
    console.log('Run JShint on all the JS files, code & tests');
    console.log('All our code will look consistent, hopefully!');
}

function runUnitTests(){
    console.log('Mocha/Jasmine');
    console.log('Code should have unit tests! Make sure that all tests pass');
}

function runIntegrationTests(){
    console.log('Hopefully Cucumber.js');
    console.log('Since we develop features, our Specs should have tests and they should pass');
}

function coverageMetrics(){
    console.log('Istanbul');
    console.log('With code coverage, what code is covered with our unit tests and what is not.');
}

function runComplexityAnalysis(){
    console.log('plato');
    console.log('With code complexity, we shall see how well we"ve written code');
}

function minify(){
    console.log('jsminify');
    console.log('Let"s say this is a build file for a library! We would need two versions. Development. Production. Production should have minified JS');
}

function deploy(){
     console.log('Deployment mechanisms');
     console.log('Deploy to whereever! CDNs maybe?');
}

function generateApiDocumentation(){
    console.log('Some doc generator');
    console.log('Everyone loves our library. Give them good docs for API Usage!');
}

function runDevBuild(){
    gutil.log('Running DEV build');
    runSequence('Static Code Analysis', 'Unit Tests', 'Integration Tests', 'Coverage', 'Complexity Ananlysis', 'Generate Documentation', 'Deploy');
}


function runStagingBuild(){
    gutil.log('Running STAGING build');
    runSequence('Static Code Analysis', 'Unit Tests', 'Integration Tests', 'Coverage', 'Complexity Ananlysis', 'Generate Documentation', 'Minification', 'Deploy');
}


function runProductionBuild(){
    gutil.log('Running PRODUCTION build');
    runSequence('Static Code Analysis', 'Unit Tests', 'Integration Tests', 'Coverage', 'Complexity Ananlysis', 'Generate Documentation', 'Minification', 'Deploy');
}

gulp.task('Static Code Analysis', runStaticCodeAnalysis);

gulp.task('Unit Tests', runUnitTests);

gulp.task('Integration Tests', runIntegrationTests);

gulp.task('Coverage', coverageMetrics);

gulp.task('Complexity Ananlysis', runComplexityAnalysis);

gulp.task('Minification', minify);

gulp.task('Generate Documentation', generateApiDocumentation);

gulp.task('Deploy', deploy);

gulp.task('build:develop', runDevBuild);

gulp.task('build:staging', runStagingBuild);

gulp.task('build:production', runProductionBuild);

gulp.task('default', ['build:develop']);
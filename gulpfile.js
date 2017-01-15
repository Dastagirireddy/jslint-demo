var gulp = require('gulp');
var jslint = require('gulp-jslint');

gulp.task('default', function() {
    return gulp.src(['src/*.js'])
        .pipe(jslint({
            // these directives can
            // be found in the official
            // JSLint documentation.
            node: true,
            es6: false,
            white: true,

            // you can also set global
            // declarations for all source
            // files like so:
            global: [],
            predef: []

            // both ways will achieve the
            // same result; predef will be
            // given priority because it is
            // promoted by JSLint
        }))
        .pipe(jslint.reporter('stylish', true));
});

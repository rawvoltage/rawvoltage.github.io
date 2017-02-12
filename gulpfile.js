var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-ruby-sass'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    nodemon = require('gulp-nodemon'),
    config = require('./gulp.config')();

////////////////////////////////////////////////////////////////////////
// Script Tasks
////////////////////////////////////////////////////////////////////////
gulp.task('scripts', function () {
    gulp.src(config.alljs)
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('production'));
});

gulp.task('scripts_gg', function () {
    gulp.src(config.gg_js)
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('production/gg'));
});

gulp.task('clean_styles', function () {
    var files = config.temp + '**/*.css';
    del(files);
});

gulp.task('styles', function () {
    return sass('scss/main-sass.scss')
        .pipe(gulp.dest('css/'));
});

////////////////////////////////////////////////////////////////////////
// Inject Tasks
////////////////////////////////////////////////////////////////////////
gulp.task('inject_main', ['scripts'], function () {
    var wiredep = require('wiredep').stream,
        inject = require('gulp-inject');

    var injectSrc = gulp.src(['css/*.css', 'production/*.js'], {
        read: false
    });

    var options = {
        bowerJson: require('./bower.json'),
        directory: './bower_components'
    };

    return gulp.src(['./*.html', '!./*.gg.html'])
        .pipe(wiredep(options))
        .pipe(inject(injectSrc, {
            addRootSlash: false
        }))
        .pipe(gulp.dest(''));
});

gulp.task('inject_gg', ['scripts_gg'], function () {
    var wiredep = require('wiredep').stream,
        inject = require('gulp-inject');

    var injectSrc = gulp.src(['css/gg/*.gg.css', 'production/gg/**/*.gg.min.js'], {
        read: false
    });

    var options = {
        bowerJson: require('./bower.json'),
        directory: './bower_components'
    };

    return gulp.src('./*.gg.html')
        .pipe(wiredep(options))
        .pipe(inject(injectSrc, {
            addRootSlash: false
        }))
        .pipe(gulp.dest(''));
});

////////////////////////////////////////////////////////////////////////
// Default Task
////////////////////////////////////////////////////////////////////////
gulp.task('default', ['scripts', 'inject_main'], function () {
    gulp.watch('js/*js', ['scripts']);
    gulp.watch('scss/*.scss', ['styles']);
});

////////////////////////////////////////////////////////////////////////
// Serve Tasks
////////////////////////////////////////////////////////////////////////
gulp.task('serve', ['scripts', 'inject_main'], function () {
    var options = {
        script: 'js/node/request.js',
        delayTime: 1,
        env: {
            'PORT': 5000
        },
        watch: config.alljs
    };

    return nodemon(options)
        .on('restart', function (ev) {
            console.log('Restarting...');
        });
});

////////////////////////////////////////////////////////////////////////
// Watch Tasks
////////////////////////////////////////////////////////////////////////
gulp.task('watch_main', function () {
    gulp.watch('js/*js', ['scripts']);
    gulp.watch('scss/*.scss', ['styles']);
    //    gulp.watch('*.html', ['scripts']);
});

gulp.task('watch_gg', function () {
    gulp.watch(['js/gg/*.gg.js', 'angular/**/*.gg.js'], ['scripts_gg']);
})
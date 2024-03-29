var gulp = require('gulp');
var browserSync = require('browser-sync');
var karma = require('karma').server;
var server = require('gulp-live-server');

gulp.task('serve', ['server'], function() {
    browserSync.init({
        notify:false,
        port: 9000,
        server: {
            baseDir:["app"],
            routes:{
                '/bower_components':'bower_components'
            }
        }
    })
    gulp.watch(['app/**/*.*'])
        .on('change', browserSync.reload);
})

gulp.task('serve-test', function() {
    browserSync.init({
        notify:false,
        port: 9001,
        server: {
            baseDir:["test", "app"],
            routes:{
                '/bower_components':'bower_components'
            }
        }
    })
    gulp.watch(['app/**/*.*'])
        .on('change', browserSync.reload);
})

gulp.task('test-browser', function(done){
    karma.start({
        configFile:__dirname + '/karma.conf.js',
        singleRun: true,
        reporters:['mocha','coverage']
    }, function(){
        done();
    })
})

gulp.task('serve-coverage', ['test-browser'], function() {
    browserSync.init({
        notify:false,
        port: 9002,
        server: {
            baseDir:["test/coverage"],
        }
    })
    gulp.watch(['app/**/*.*'])
        .on('change', browserSync.reload);
})

gulp.task('server', function(){
    var live = new server('server.js');
    live.start();
})



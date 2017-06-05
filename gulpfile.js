
    var gulp = require('gulp');
    var tsc = require('gulp-typescript');
    var webpack = require('webpack');
    var path = require ('path');
    var minifyCss = require('gulp-minify-css');
    var concat = require('gulp-concat');

    
    

    gulp.task('css', function(){
        gulp.src('./src/assets/css/*.css')
        .pipe(minifyCss())
        .pipe(concat('style.min.css'))
        //another copy in dist
        .pipe(gulp.dest('./dist/assets/css'))
    })
    
     gulp.task('tsc', function(){
        return gulp.src('./src/**/*.ts')
            .pipe(tsc())
            .pipe(gulp.dest('./src'));
    })


    gulp.task('webpack', function(callback){
        webpack({entry : './src/app/app.module.js', output: {path: path.join(__dirname,'dist'), filename: 'bundle.js'}},
        function(){
            callback();
        })
        
    })

   

    gulp.task('watch', function(){
        gulp.watch('./src/**/*.ts', ['webpack','tsc']);
        gulp.watch('./src/**/*.css', ['css']);
    })
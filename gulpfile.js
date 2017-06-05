
    var gulp = require('gulp');
    var sass = require('gulp-sass');
    var tsc = require('gulp-typescript');
    var webpack = require('webpack');
    var path = require ('path');
    var sass = require('gulp-sass');
    
    

    gulp.task('sass', function(){
        gulp.src('./src/assets/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/assets/css'))
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
        gulp.watch('./src/**/*.scss', ['sass','webpack']);
    })
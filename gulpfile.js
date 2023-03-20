const { src, dest, watch } = require('gulp');
const compileSass = require('gulp-sass')(require('sass'));
const minifiyCss = require('gulp-clean-css');

// compileSass.compiler = require('node-sass');

const bundleSass = () =>{
    return src('./sass/*.sass')
        .pipe(compileSass().on('error',compileSass.logError))
        .pipe(minifiyCss())
        .pipe(dest('./'));
};

const devWatch = () => {
    watch("./sass/*.sass",bundleSass);
};

exports.bundleSass = bundleSass;
exports.devWatch = devWatch;
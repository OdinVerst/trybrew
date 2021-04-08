const {src, dest, series, watch, parallel} = require("gulp");
// CSS
const postcss = require("gulp-postcss");
// SVG
const svgSprite = require('gulp-svgstore');
const svgo = require('gulp-svgo');
const rename = require('gulp-rename');
// Webpack
const webpackStream = require('webpack-stream');
const configWebpack = require('./webpack.config');
const configDevWebpack = require('./webpack.dev.config');

// Entrypoint
const configPath = require('./config.entrypoint');

const jsTask = () => {
    return src(configPath.js.entry)
        .pipe(webpackStream(configDevWebpack))
        .pipe(dest(configPath.js.output));
};

const jsProd = () => {
    return src(configPath.js.entry)
        .pipe(webpackStream(configWebpack))
        .pipe(dest(configPath.js.output));
};

const pluginsPostCSS = [
    require('postcss-import'),
    require('postcss-color-hex-alpha'),
    require('autoprefixer'),
    require('postcss-csso'),
];

const styles = () => {
    return src(configPath.css.entry)
        .pipe(postcss(pluginsPostCSS))
        .pipe(dest(configPath.css.outputProd));
}

const svgTask = () => {
    return src(configPath.svg.entry)
        .pipe(svgo())
        .pipe(svgSprite())
        .pipe(rename(configPath.svg.nameFile))
        .pipe(dest(configPath.svg.output));
};

const watchTask = () => {
    watch(configPath.js.watch, series(jsTask));
    watch(configPath.css.watch, series(styles));
    watch(configPath.svg.watch, series(svgTask));
};


exports.build = series(
    parallel(jsProd, styles, svgTask)
);

exports.default = series(
    parallel(jsTask, styles, svgTask),
    parallel(watchTask)
);

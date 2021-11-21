const dirName = './dist';
const jsNames = ['main'];
const cssNames = ['main'];
const jsRoot = './src/scripts/';
const cssRoot = './src/styles/';

const createArrayFullSrc = (arr, path, ext) => {
  return arr.map((el) => `${path}${el}.${ext}`);
};

const webpackJSObj = () => {
  const filesJS = createArrayFullSrc(jsNames, jsRoot, 'js');
  const obj = {};
  jsNames.forEach((file, index) => {
    obj[file] = filesJS[index];
  });

  return obj;
};

module.exports = {
  js: {
    entry: createArrayFullSrc(jsNames, jsRoot, 'js'),
    output: `${dirName}/js`,
    outputProd: `${dirName}/js`,
    watch: `${jsRoot}*.js`,
    webpack: webpackJSObj(),
  },
  pages: {
    entry: './src/pages/**/*.html',
    output: `${dirName}/`,
    watch: './src/**/*.html',
  },
  css: {
    entry: createArrayFullSrc(cssNames, cssRoot, 'css'),
    output: `${dirName}/css`,
    outputProd: `${dirName}/css`,
    watch: './src/**/*.css',
  },
  svg: {
    entry: './src/**/svg/*.svg',
    output: `${dirName}/img`,
    watch: './src/**/svg/*.svg',
    nameFile: 'sprite.svg',
  },
  font: {
    entry: './src/fonts/**/*.*',
    output: `${dirName}/fonts/`,
    watch: './src/fonts/**/*.*',
  },
  img: {
    entry: './src/**/img/*.*',
    output: `${dirName}/img/`,
    watch: './src/**/img/*.*',
  },
  dir: `${dirName}`,
  favicon: {
    entry: './src/favicon.ico',
    output: `${dirName}/`,
  },
  csscommon: {
    entry: './src/css-common/*.css',
    watch: './src/css-common/*.css',
    output: `${dirName}/css/`,
  },
  php: {
    entry: './src/backend-api/**/*.php',
    watch: './src/backend-api/**/*.php',
    output: `${dirName}/backend-api/`,
  },
};

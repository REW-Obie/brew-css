const mix = require('laravel-mix');

const dev = !mix.inProduction();
const input = `src/brew.pcss`;
const output = `css/brew${dev ? '.dev' : ''}.css`;
const publicPath = 'dist';

const mixOptions = { };
const webpackConfig = {};
const postCssPlugins = [
    !dev && require('cssnano')({
        discardComments: { removeAll: true },
        zindex: false
    }),
    require('postcss-import'),
    require('postcss-cssnext')({
        browsers: 'last 3 versions',
        features: {
            customProperties: {
                warnings: false
            }
        }
    }),
    require('postcss-css-variables')
].filter(v => !!v);

console.log(
    'Build Mode: %s\n',
    mix.inProduction() ? 'prod' : 'dev'
);

mix.postCss(input, output, postCssPlugins)
    .webpackConfig(webpackConfig)
    .setPublicPath(publicPath)
    .options(mixOptions)
    .sourceMaps(false)
    .version()
;

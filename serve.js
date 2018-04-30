var open = require('open'),
    webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    config = require('./webpack.config');

var compiler = webpack(config);

const APP_PORT = process.env.APP_PORT;
const APP_HOST = process.env.APP_HOST;
const SERVER_PORT = process.env.SERVER_PORT || 8000;
const SERVER_HOST = APP_HOST;

var server = new WebpackDevServer(compiler, {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {
        colors: true
    },
    proxy: {
        '/api/*': `http://${SERVER_HOST}:${SERVER_PORT}`
    }
});
server.listen(APP_PORT, APP_HOST);

open(`http://${APP_HOST}:${APP_PORT}`);

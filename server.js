require('dotenv').config();

const express = require('express');
const path = require('path');
const server = express();

const port = process.env.PORT;
const host = process.env.HOST;
const publicPath = path.resolve(__dirname, 'public');
const isProd = process.env.NODE_ENV === 'production';

server.use(express.static(publicPath));

if(!isProd) {
    const webpack = require('webpack');
    const config = require('./config/webpack.dev.js');
    const compiler = webpack(config);

    const webpackDevMiddleware = require('webpack-dev-middleware')(compiler, config.devServer);
    const webpackHotMiddleware = require('webpack-hot-middleware')(compiler);
    const history = require('connect-history-api-fallback');

    server.use(history());
    server.use(webpackDevMiddleware);
    server.use(webpackHotMiddleware);
} else {
    server.get('*', (req, res) => {
        res.sendFile(path.join(publicPath, 'index.html'));
    });
}

server.listen(port, host, () => {
    console.log(`Listening ${host}:${port}`);
});

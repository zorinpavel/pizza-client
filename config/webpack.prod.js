const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.config.js');


module.exports = merge(common, {
    mode: 'production',
    entry: {
        main: [
            path.resolve(__dirname, '../src/index.js')
        ]
    },
});

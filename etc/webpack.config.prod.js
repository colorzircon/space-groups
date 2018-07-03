var webpack = require('webpack');
var baseConfig = require('./webpack.config.base.js');


module.exports =  Object.assign({},
    baseConfig,
    {
        devtool:  'source-map',
        mode: 'production',
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('production'),
            })
        ]
    }
);

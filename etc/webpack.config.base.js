const path = require('path');

module.exports = {

    devtool:  'source-map',

    entry: {
        'space-goups': path.resolve(__dirname, '../src/space-groups.ts')
    },

    output: {
        globalObject: 'typeof self !== \'undefined\' ? self : this',
        path: path.resolve(__dirname, '../dist'),
        libraryTarget: 'umd',
        library: 'space-goups',
        umdNamedDefine: true
    },

    module: {
        rules: [{
            test: /\.ts?$/,
            exclude: /node_modules/,
            loader: 'awesome-typescript-loader'
        }]
    },

    resolve: {
        extensions: ['.ts']
    }
};

const path = require('path');

module.exports= {
    mode: 'development',
    entry: {
        index:'./src/index.js',
        menu:'./src/menu.js',
        contact:'./src/contact.js'
    },
    devtool: 'inline-source-map',
    devServer:{
        static:'./dist',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname,'dist'),
        clean: true,
    },
    optimization:{
        runtimeChunk:'single',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type:'asset/resource',
            },
        ],
    },

};
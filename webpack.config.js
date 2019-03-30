const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './js/script.js',
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.[chunkhash].js',
        publicPath: './dist'
    },
    module: {
        rules: [{
            test: /\.(js)$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },
        {
            use: ExtractTextPlugin.extract({
                use: 'css-loader'
            }),
            test: /\.css$/
        },
        {
            test: /\.(jpe?g|png|gif|svg)$/,
            use: [
                {
                    loader: 'url-loader',
                    options:{
                        limit:40000,
                        outputPath: './images'
                    }
                },
                'image-webpack-loader'
            ]
        }]
    },
    plugins: [
        new ExtractTextPlugin('./css/style.css'),
        new HtmlWebPackPlugin({template: './index.html'})
    ]

}
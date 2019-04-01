const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
    entry: './js/script.js',
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.[chunkhash].js',
        // publicPath: '/'
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
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use:[ {
                    loader: 'css-loader',
                    options: {
                        url: false
                    }
                }]
            
        })
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
        new ExtractTextPlugin('css/style.css'),
        new HtmlWebPackPlugin({template: './index.html'}),
        new CopyWebpackPlugin([{from: 'css/fonts', to: 'css/fonts'}])
    ],
    devServer: {
        contentBase: 'dist'
    }

}
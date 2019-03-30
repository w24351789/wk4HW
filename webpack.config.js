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
        },{
            test: /\.(eot|ttf|svg)$/,
            use: [
                {
                    loader: 'file-loader?prefix=font/',
                    options:{
                        outputPath: './css/fonts'
                    }
                }
            ]
			
		}, {
            test: /\.woff/,
            use: [
                {
                    loader: 'file-loader?prefix=font',
                    options:{
                        outputPath: './css/fonts',
                        limit:10000,
                        mimetype:'application/font-woff'
                    }
                }
            ]
			
		}]
    },
    plugins: [
        new ExtractTextPlugin('css/style.css'),
        new HtmlWebPackPlugin({template: './index.html'})
    ]

}
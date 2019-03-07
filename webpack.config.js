const path = require('path')
const Dotenv = require('dotenv-webpack')
const fs = require('fs-extra')
const ImageminPlugin = require("imagemin-webpack");
const imageminGifsicle = require("imagemin-gifsicle");
const imageminJpegtran = require("imagemin-jpegtran");
const imageminOptipng = require("imagemin-optipng");
const imageminSvgo = require("imagemin-svgo");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

fs.copySync(path.resolve(__dirname, 'public'), path.resolve(__dirname, 'dist'), {
    dereference: true
})
console.log(process.env.NODE_ENV);

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    mode: process.env.NODE_ENV || 'development',
    watch: true,
    devServer: {
      contentBase: path.join(__dirname,'dist'),
      port: 3000,
      compress: true,
      open: true,
      historyApiFallback: true
    },
    module: {
        rules: [
            { 
                test: /\.css$/, 
                use: [
                  {loader: "style-loader"}, 
                  {loader: "css-loader"}
                ]
            },
            {
	            test: /\.scss$/,
		        exclude: /node_modules/,
                use: [
                {loader: "style-loader"}, 
                {loader: "css-loader"}, 
                {loader: "sass-loader"}
                ]
	        },
            { 
                test: /\.js$/, 
				use:{
				    loader: "babel-loader",
				    options: {
                      presets: ['@babel/preset-env','@babel/preset-react']
                    },
                    
				}
        },
        {
            test: /\.(html)$/,
            use: {
              loader: 'html-loader',
              options: {}
            }
        },
        {
            test: /\.(png|jpe?g|gif|ico|svg)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                    outputPath: 'images',
                },
              },
            ],
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
              {
                loader: 'file-loader'
              },
            ],
        },

        ]
    },
    plugins: [
      new ImageminPlugin({
        test: /\.(png|jpg|gif)$/,
        bail: false, // Ignore errors on corrupted images
        cache: true,
        imageminOptions: {
          // Lossless optimization with custom option
          // Feel free to experement with options for better result for you
          plugins: [
            imageminGifsicle({
              interlaced: true
            }),
            imageminJpegtran({
              progressive: true
            }),
            imageminOptipng({
              optimizationLevel: 5
            }),
            imageminSvgo({
              removeViewBox: true
            })
          ]
        }
      })
    ]    
}
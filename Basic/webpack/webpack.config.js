const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry : './index.js', // Main file for our app,
    output : {
        filename : 'bundle.js',
        path : __dirname + '/dist'
    },
    module : {
        rules : [
            {
                test : /\.js%/, // This tell webpack to apply module only on js file
                exclude : /(node_modules)/, // here we are excluding files in node_module folder
                use : 'babel-loader' // Here we define which module we are going to use
            },
            {
                test : /\.scss$/,
                use : [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins : [
        new MiniCssExtractPlugin({
            filename : 'main.css'
        })
    ],
    watch : true
}
const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCssAssetPlugin = require("optimize-css-assets-webpack-plugin")
const TerserWebpackPlugin = require("terser-webpack-plugin")

let mode = "development"
if (process.env.NODE_ENV === "production") {
    mode = "production"
}

const isDev = process.env.NODE_ENV === "development"
const isProd = !isDev
const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}` 

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    }

    if (isProd) {
        config.minimizer = [
            new OptimizeCssAssetPlugin(),
            new TerserWebpackPlugin()
        ]
    }

    return config
}

const isSourceMap = () => {
    if(isDev){
        return "source-map"
    } else {
        return "nosources-source-map"
    }
}

module.exports = {
    mode,
    entry: {
        main: path.resolve(__dirname, "./src/assets/js/index.js")
    },
    devtool: isSourceMap(),
    output: {
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "assets/[hash][ext][query]",
        filename: filename('js'),
        clean: true
    },
    optimization: optimization(),
    devServer: {
        hot: false,
        compress: true,
        open: true,
        port: 8000
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "./src/index.html")
        }),
        new MiniCssExtractPlugin({
            filename: `assets/styles/${filename('css')}`
        })
    ],
    module: {
        rules: [
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
                type: "asset/resource"
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(scss|sass)/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(html)$/,
                use: ["html-loader"]
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/i,
                type: "asset/resource"
            }
        ]
    }
}

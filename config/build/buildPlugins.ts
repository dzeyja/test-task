import { WebpackPluginInstance } from "webpack";
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from 'webpack'

export function buildPlugins({ paths, isDev }: BuildOptions): WebpackPluginInstance[] {
    const plugins = [
        new HtmlWebpackPlugin ({
            template: paths.html
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
          filename: 'css/[name].[contenthash:8].css',
          chunkFilename: 'css/[name].[contenthash:8].css',
        }),
    ]
    
    if(isDev) {
        plugins.push(new webpack.HotModuleReplacementPlugin())
    }

    return plugins
}
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack, {DefinePlugin} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/types";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

export const buildPlugins = ({mode, paths, platform}: BuildOptions): webpack.Configuration["plugins"] => {

    const isDev = mode === 'development';

    const plugins: webpack.Configuration["plugins"] = [
        new HtmlWebpackPlugin({template: paths.html}),
        new DefinePlugin({__PLATFORM__: JSON.stringify(platform)}),
    ]


    if (isDev) {
        plugins.push(new webpack.ProgressPlugin())
        plugins.push(new ForkTsCheckerWebpackPlugin()) // Для проверки типов в риалтайме без замедления комплияции
        plugins.push(new ReactRefreshWebpackPlugin())
    }

    if (!isDev) {
        plugins.push(new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash].css",
            chunkFilename: "css/[name].[contenthash].css"
        }))
    }

    return plugins;
}
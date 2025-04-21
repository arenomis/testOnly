// noinspection ES6UnusedImports
import {Configuration} from "webpack-dev-server";
import webpack from "webpack";
import {BuildOptions} from "./types/types";

export const buildDevServer = (options: BuildOptions): webpack.Configuration["devServer"] => ({
    port: options.port || 3000,
    open: true,
    // Только для dev серверва, если раздавать ститику через nginx, то надл делать проксирование на index.html
    historyApiFallback: true, // Для SPA роутинга
    hot: true
})
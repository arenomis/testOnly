import {Configuration} from "webpack-dev-server";
import webpack from "webpack";
import {BuildOptions} from "./types/types";

export const buildDevServer = (options: BuildOptions): webpack.Configuration["devServer"] => ({
    port: options.port || 3000,
    open: true,
    historyApiFallback: true, 
    hot: true
})
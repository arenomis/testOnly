import webpack from "webpack";
import {resolve} from "path";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildDevServer} from "./builldDevServer";
import {buildResolvers} from "./buildResolvers";
import {BuildOptions} from "./types/types";

export const buildWebpack = (options: BuildOptions): webpack.Configuration => {
    const {paths} = options;
    const isDev = options.mode === 'development';

    return {
        mode: options.mode || 'development',
        entry: paths.entry,
        output: {
            path: paths.output,
            filename: "[name].[contenthash].js"
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(options),
        devtool: isDev && 'inline-source-map',
        devServer: isDev ? buildDevServer(options) : undefined
    }
}
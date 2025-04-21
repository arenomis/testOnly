import webpack from "webpack";
import {BuildOptions} from "./types/types";

export const buildResolvers = (options: BuildOptions): webpack.Configuration["resolve"] => ({
    extensions: ['.tsx', '.ts', '.js'],
    modules: [options.paths.src, 'node_modules'],
    preferAbsolute: true,
})
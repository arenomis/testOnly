import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import {BuildOptions} from "./types/types";
import ReactRefreshTypeScript from 'react-refresh-typescript'

export const buildLoaders = (options: BuildOptions): webpack.Configuration["module"]["rules"] => {

    const isDev = options.mode === 'development';

    const assetLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        type: 'asset/resource',
    }

    const svgrLoader = {
        test: /\.svg$/,
        use: [{
            loader: '@svgr/webpack',
            options: {
                icon: true,
            }
        }]
    }

    const stylesWithModules = {
        loader: "css-loader",
        options: {
            modules: {
                localIdentName: isDev ? '[path][name]__[local]--[hash:base64:8]' : '[hash:base64:8]',
                namedExport: false // Для того, чтобы указывать `import cls`, а не `import * as cls`
            },
        }
    }

    const styleLoader = {
        test: /\.s[ac]ss$/i,
        use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, stylesWithModules, "sass-loader"],
    }

    const tsLoader = {
        // ts-loader работает с jsx
        // без ts-loader понадобился бы babel-loader
        test: /\.tsx?$/,
        use: [{
            loader: 'ts-loader',
            options: {
                transpileOnly: isDev, // ts только на момент компиляции, без проверки типов для дева
                // Для проверки типов в риалтайме без замедления компиляции плагин
                // fork-ts-checker-webpack-plugin

                getCustomTransformers: () => ({
                    before: [isDev && ReactRefreshTypeScript()].filter(Boolean)
                })
            }
        }],
        exclude: /node_modules/,
    }

    return [
        assetLoader,
        styleLoader,
        tsLoader,
        svgrLoader,
    ]

}
import {buildWebpack} from "./config/build/buildWebpack";
import {BuildPaths} from "./config/build/types/types";
import path from 'path';

interface EnvVariables {
    mode?: 'development' | 'production',
    platform?: 'mobile' | 'desktop',
    port?: number,
}

export default (env: EnvVariables) => {
    const paths: BuildPaths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src')
    }

    const config = {
        mode: env.mode || 'development',
        port: env.port || 3000,
        paths,
        platform: env.platform || 'desktop'
    }

    return buildWebpack(config)
};

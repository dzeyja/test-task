import { Configuration } from "webpack";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";
import { buildDevServer } from "./buildDevServer";


export function buildWebpackConfig(options: BuildOptions): Configuration {
    const {
        paths,
        mode,
        isDev
    } = options
    
    return {
        mode: mode,
        entry: paths.entry,
        output: {
            path: paths.build,
            filename: '[name].[contenthash].js',
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devServer: isDev ? buildDevServer(options) : undefined
    }    
}
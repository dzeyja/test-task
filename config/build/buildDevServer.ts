import { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/config";

export function buildDevServer({ port }: BuildOptions): DevServerConfiguration {
    return {
        port: port,
        hot: true,
        open: true,
        historyApiFallback: true
    }
}
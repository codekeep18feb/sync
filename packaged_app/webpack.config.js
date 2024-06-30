const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        library: 'randomColorPackage',
        libraryTarget: 'umd',
        globalObject: 'this'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js']
    },
    mode: 'development', // Change to development for easier debugging
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        }, // Serve static files from the dist directory
        compress: true,
        port: 9000, // You can change the port if needed
        open: true, // Automatically open the browser
        hot: true, // Enable Hot Module Replacement
        devMiddleware: {
            writeToDisk: true, // Write files to disk
        }
    }
};

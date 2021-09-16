const path = require('path');

const config = {
    entry: {
        'app': ['@babel/polyfill', './src/investment_center/index.js'],
    },
    output: {
        filename: '[name]/[name].js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "@babel/preset-typescript",
                            "@babel/preset-react",
                            ["@babel/preset-env", {
                                "useBuiltIns": "usage",
                                "corejs": 3
                            }]
                        ],
                        "plugins": [
                            [
                                "@babel/transform-runtime"
                            ]
                        ]
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
    },
    plugins: []
};

module.exports = (env, argv) => {
    if (argv.mode === 'production') {
        config.devtool = 'source-map';
        config.output.filename = '[name]/[name].min.js';
        config.output.sourceMapFilename = '[name]/[name].min.js.map';
    }

    return config;
};

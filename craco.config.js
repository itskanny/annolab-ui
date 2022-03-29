const CracoLessPlugin = require('craco-less');
const Dotenv = require('dotenv-webpack');

module.exports = {
    plugins: [
        new Dotenv(),
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        // modifyVars: { '@primary-color': '#4D47C3',},
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};
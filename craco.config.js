const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@ui': path.resolve(__dirname, 'src/ui'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@db': path.resolve(__dirname, 'src/db'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@layout': path.resolve(__dirname, 'src/layout'),
            '@fonts': path.resolve(__dirname, 'src/fonts'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@widgets': path.resolve(__dirname, 'src/widgets'),
            '@contexts': path.resolve(__dirname, 'src/contexts'),
            '@constants': path.resolve(__dirname, 'src/constants'),
            '@features': path.resolve(__dirname, 'src/features'),
        },
    }
};
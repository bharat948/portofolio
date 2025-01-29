module.exports = {
    webpack: {
      configure: {
        module: {
          rules: [
            {
              test: /\.js$/,
              enforce: 'pre',
              use: ['source-map-loader'],
              exclude: [
                /node_modules\/@mediapipe/,
                /node_modules\/@react-three/,
                /node_modules\/three/
              ],
            },
          ],
        },
        ignoreWarnings: [
          function ignoreSourcemapsloaderWarnings(warning) {
            return (
              warning.module &&
              (warning.module.resource.includes('@mediapipe') ||
                warning.module.resource.includes('@react-three') ||
                warning.module.resource.includes('three'))
            );
          },
        ],
      },
    },
  };
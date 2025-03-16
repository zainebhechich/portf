const path = require('path');

module.exports = {
  webpack(config) {
    // Define alias for better imports
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve(__dirname, 'components'),
    };

    // Ensure Webpack returns the modified config
    return config;
  },
};

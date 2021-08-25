const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@Assets': path.resolve(__dirname, 'src/assets'),
      '@CLanding': path.resolve(__dirname, 'src/components/Landing'),
      '@CDashboard': path.resolve(__dirname, 'src/components/Dashboard'),
      '@PLanding': path.resolve(__dirname, 'src/pages/Landing'),
      '@PDashboard': path.resolve(__dirname, 'src/pages/Dashboard'),
    }
  },
};
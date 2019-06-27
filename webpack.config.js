module.exports = {
    entry: './index.js',
    mode: 'development',
    node: {
        fs: 'empty',
        net: 'empty'
      }
  };
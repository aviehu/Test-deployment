module.exports = {
    entry: './index.js',
    target: 'node',
    mode: 'development',
    node: {
        fs: 'empty',
        net: 'empty'
      }
  };
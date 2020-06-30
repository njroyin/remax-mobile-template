module.exports = {
  one: true,
  output: process.env.NODE_ENV === 'production' && process.env.REMAX_PLATFORM == 'web' ? 'www/' : 'dist/' + process.env.REMAX_PLATFORM,
  configWebpack({ config, webpack, addCSSRule }) {
    config
      .when(process.env.NODE_ENV === 'production' && process.env.REMAX_PLATFORM == 'web', config => {
        config.output.publicPath("./");
      }, config => {
        config.output.publicPath("/");
      })
      .module
      .rule('image')
      .test(/\.(png|jpe?g|gif|svg)$/i)
      .use('file')
      .loader(require.resolve('file-loader'))
      .options({
        name: '[path][name].[ext]?[hash]',
        context: 'src/',
      })
      .end()
      .rule('font')
      .test(/\.(ttf|eot|woff|woff2)$/i)
      .use('file')
      .loader(require.resolve('file-loader'))
      .options({
        name: '[path][name].[ext]?[hash]',
        context: 'src/',
      }).end();
  }
};

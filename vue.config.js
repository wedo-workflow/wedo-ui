module.exports = {
  chainWebpack: config => {
    config.module
      .rule('raw')
      .test(/\.bpmn$/)
      .use('raw-loader')
      .loader('raw-loader')
      .end()
  }
}

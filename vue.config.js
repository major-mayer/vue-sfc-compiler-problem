module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set("vue", "@vue/compat");

    config.module
      .rule("vue")
      .use("vue-loader")
      .tap((options) => ({
        ...options,
        compilerOptions: {
          compatConfig: {
            MODE: 2,
          },
        },
      }));
  },
  productionSourceMap: false,
  css: {
    loaderOptions: {
      scss: {
        // additionalData: "@import \"@/css/bulmaVariables.scss\";",
      },
    },
  },

  configureWebpack: {
    devtool: "source-map",
    module: {
      rules: [
      ],
    },
  },

};

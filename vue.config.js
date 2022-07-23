module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/stylesheet/variables.scss";`,
      },
    },
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
      },
    },
  },
};

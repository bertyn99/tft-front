const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        loaderOptions: `
        @import "@/scss/_variables.scss";
        @import "@/scss/_function.scss";
        @import "@/scss/_mixins.scss";
        `,
      },
    },
  },
});

const config = {
  stories: ["../**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: ["@storybook/addon-essentials", "@quillar/storybook-addon"],
  framework: "@storybook/angular",
  features: {
    emotionAlias: false,
  },
  webpackFinal: async (config: any) => {
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: "javascript/auto",
    });

    return config;
  },
};

export default config;

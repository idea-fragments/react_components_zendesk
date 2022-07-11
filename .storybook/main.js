module.exports = {
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/preset-create-react-app"],
  "framework": "@storybook/react",
  babel: {
    plugins: [["babel-plugin-styled-components"]]
  },
  core: {
    builder: "webpack5"
  }
};
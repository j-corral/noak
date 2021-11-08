module.exports = {
  "stories": [
    "../packages/**/stories/*.stories.mdx",
    "../packages/**/stories/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-actions",
    "@storybook/addon-info",
    "@storybook/addon-knobs",
    "@storybook/addon-options",
    "@storybook/addon-storyshots",
    "@storybook/addon-toolbars",
    "@storybook/addon-essentials",
    "@snek-at/storybook-addon-chakra-ui"
  ]
}
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current"
        }
      }
    ],
    "@babel/preset-react"
  ],
  plugins: [
    "babel-plugin-macros",
    "babel-plugin-require-context-hook",
    "babel-plugin-styled-components"
  ]
};

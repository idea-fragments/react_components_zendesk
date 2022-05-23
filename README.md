# React Components - Zendesk

Warning - This library isn't the most organized and isn't really made for public use. Use at your own risk.

---

Component library built on the V6 version of the Zendesk React components library. 

This library's main purpose is to provide, for the IdeaFragments organization, components who's external interfaces will not change, regardless of which internal library is used to power the components. For ex, if the `Button` component is switched to use a different library other than the Zendesk library, the external props passed to the `Button` component will not change, even if the new library required different props.

There are plans to update the components to use the v8 version of the Zendesk Library. But currently library is provided as is.
module.exports = {
"stories": [
"../src/**/*.stories.mdx",
"../src/**/*.stories.@(js|jsx|ts|tsx)"
],
"addons": [
"@storybook/addon-links",
"@storybook/addon-essentials",
"@storybook/addon-interactions",
"@storybook/preset-create-react-app"
],
"framework": "@storybook/react",
"core": {
"builder": "@storybook/builder-webpack5"
},
babel: {
plugins: [
["babel-plugin-styled-components"]
]
}
}

## Usage

### As NPM package
```shell
npm i @idea-fragments/react-components-zendesk
```

### As Submodule
Clone project into submodule for your main project

Add this to the `package.json` of the main project.

```
"react-components-zendesk":"file:src/vendor/react_components_zendesk"
```

Run `npm install` in main project. 

If on Windows and using WSL to run your projects, use a node interpreter for windows when installing the packages. You may run into an issue when using WSL to install the package due to an issue with linux symlinks not being compatible with Windows.

_EDIT - This may not be an issue anymore_

Re-install library after any code change.

Ensure webpack for main project knows how to resolve imports located in library.
For example, if you're using `config-overrides.js` with the `customize-cra` npm package, do something like:
  ```
    addWebpackResolve({
      modules: [
          "node_modules",
          // Sam, always add this so you can have cleaner imports
          resolveApp("src"), // main app src
          resolveApp("src/vendor/react_components_zendesk/src"), // lib src
      ],
    }),
  ```

## Links
[Zendesk Garden Component Library](https://github.com/zendeskgarden/react-components)

[V6 Docs for the Zendesk Garden Components Library](https://606f9e155f932060ab2899e8--zendeskgarden.netlify.app/)

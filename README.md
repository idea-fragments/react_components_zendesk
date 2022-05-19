# react_components_zendesk ...

- Clone project into submodule for your main project
- add `"react-components-zendesk":"file:src/vendor/react_components_zendesk"` to the package.json of the main project.
- run `npm install` in main project. If on Windows, use a node interpreter for windows, not WSL due to an issue with linux symlinks not being compatible with Windows.
- Re-install library after any code change.
- Ensure webpack for main project knows how to resolve imports located in library.
  - If you're using config-overrides.js with the customize-cra npm package, do something like:
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

/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-holy-futuristic-template-namespacing-batman',

  setupPreprocessorRegistry(type, registry) {
    registry.add("htmlbars-ast-plugin", {
      name: "bind",
      plugin: require("./lib/namespacing-transform"),
      baseDir() {
        return __dirname;
      }
    });
  }
};

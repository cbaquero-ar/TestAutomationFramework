// Why you might want to create your config with typescript:
// Editors like Microsoft Visual Studio Code will have autocomplete and
// description hints.
import {Config} from 'protractor';

export let config: Config = {
  capabilities: {
    browserName: 'chrome'
  },
  framework: 'jasmine',
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
    showColors: true
  },

  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  noGlobals: true,

  seleniumAddress: 'http://localhost:4444/wd/hub',
  suites: {
    all: ['./**/*-spec.js'],
  }
};

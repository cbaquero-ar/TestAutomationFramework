exports.config = {

  framework: 'jasmine',
    specs: ['*.spec.js'],
    jasmineNodeOpts: {
      showColors: true,
      isVerbose: true,
      realtimeFailure: true,
      includeStackTrace: true,
      defaultTimeoutInterval: 30000
    },
    seleniumAddress: 'http://cbaquero-ar:cb3f1ea4-18d0-4cbe-8048-671424ddb636@ondemand.saucelabs.com:80/wd/hub',
    multiCapabilities : [
        { browserName: 'chrome', platform: 'Windows 7', screenResolution: '1280x960' },
    ]
  }
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdHJhY3Rvci5jb25mLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vcHJvdHJhY3Rvci5jb25mLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBS1csUUFBQSxNQUFNLEdBQVc7SUFDMUIsWUFBWSxFQUFFO1FBQ1osV0FBVyxFQUFFLFFBQVE7S0FDdEI7SUFDRCxTQUFTLEVBQUUsU0FBUztJQUNwQixlQUFlLEVBQUU7UUFDZixzQkFBc0IsRUFBRSxLQUFLO1FBQzdCLFVBQVUsRUFBRSxJQUFJO0tBQ2pCO0lBRUQsMEVBQTBFO0lBQzFFLHNDQUFzQztJQUN0QyxTQUFTLEVBQUUsSUFBSTtJQUVmLGVBQWUsRUFBRSw4QkFBOEI7SUFDL0MsTUFBTSxFQUFFO1FBQ04sR0FBRyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7S0FDeEI7Q0FDRixDQUFDIn0=
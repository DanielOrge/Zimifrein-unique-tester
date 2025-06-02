// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/proxy.js';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/jasmine-patch';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

// fixes typing errors in Atom editor
import {} from 'jasmine';

// Instead of declaring as any, provide minimal typings for __karma__ and require
interface Karma {
  loaded: () => void;
  start: () => void;
}
declare var __karma__: Karma;

declare function require(module: string): any;
declare namespace require {
  function context(directory: string, useSubdirectories: boolean, regExp: RegExp): {
    keys: () => string[];
    (id: string): any;
  };
}

// Prevent Karma from running prematurely.
__karma__.loaded = function () {};

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const contextModule = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
contextModule.keys().map((key) => contextModule(key));
// Finally, start Karma to run the tests.
__karma__.start();

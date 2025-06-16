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

// Unfortunately there's no typing for the `__karma__` variable. Just declare it as any.
declare var __karma__: unknown;
declare var require: unknown;

// Prevent Karma from running prematurely.
if (typeof __karma__ === 'object' && __karma__ !== null && typeof (__karma__ as any).loaded === 'function') {
  (__karma__ as any).loaded = function () {};
}

// First, initialize the Angular testing environment.
const testBed = getTestBed();
if (typeof testBed.initTestEnvironment === 'function') {
  testBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  );
}
// Then we find all the tests.
let context: any;
if (typeof require === 'function' && typeof (require as any).context === 'function') {
  context = (require as any).context('./', true, /\.spec\.ts$/);
  // And load the modules.
  if (Array.isArray(context.keys())) {
    context.keys().map((key: string) => context(key));
  }
}
// Finally, start Karma to run the tests.
if (typeof __karma__ === 'object' && __karma__ !== null && typeof (__karma__ as any).start === 'function') {
  (__karma__ as any).start();
}

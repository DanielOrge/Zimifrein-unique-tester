/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-empty-function, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-return */
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

// Helper type guards
function hasLoaded(obj: unknown): obj is { loaded: () => void } {
  return typeof obj === 'object' && obj !== null && typeof (obj as { loaded?: unknown }).loaded === 'function';
}
function hasStart(obj: unknown): obj is { start: () => void } {
  return typeof obj === 'object' && obj !== null && typeof (obj as { start?: unknown }).start === 'function';
}
function hasInitTestEnvironment(obj: unknown): obj is { initTestEnvironment: (a: unknown, b: unknown) => void } {
  return typeof obj === 'object' && obj !== null && typeof (obj as { initTestEnvironment?: unknown }).initTestEnvironment === 'function';
}
function hasContext(obj: unknown): obj is { context: (a: string, b: boolean, c: RegExp) => { keys: () => string[] } } {
  return typeof obj === 'function' || (typeof obj === 'object' && obj !== null && typeof (obj as { context?: unknown }).context === 'function');
}
function hasKeys(obj: unknown): obj is { keys: () => string[] } {
  return typeof obj === 'object' && obj !== null && typeof (obj as { keys?: unknown }).keys === 'function';
}
function isContextFunction(obj: unknown): obj is (key: string) => void {
  return typeof obj === 'function';
}

// Prevent Karma from running prematurely.
if (hasLoaded(__karma__)) {
  __karma__.loaded = function () {/* intentionally empty */};
}

// First, initialize the Angular testing environment.
const testBed = getTestBed();
if (hasInitTestEnvironment(testBed)) {
  testBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  );
}

// Then we find all the tests.
let context: unknown = undefined;
if (hasContext(require)) {
  context = require.context('./', true, /\.spec\.ts$/);
  if (hasKeys(context)) {
    const keys = context.keys();
    if (Array.isArray(keys)) {
      keys.forEach((key: string) => {
        if (isContextFunction(context)) {
          context(key);
        }
      });
    }
  }
}

// Finally, start Karma to run the tests.
if (hasStart(__karma__)) {
  __karma__.start();
}

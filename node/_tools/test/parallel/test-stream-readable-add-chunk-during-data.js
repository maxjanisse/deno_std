// deno-fmt-ignore-file
// deno-lint-ignore-file

// Copyright Joyent and Node contributors. All rights reserved. MIT license.
// Taken from Node 18.12.0
// This file is automatically generated by "node/_tools/setup.ts". Do not modify this file manually

'use strict';
const common = require('../common');
const assert = require('assert');
const { Readable } = require('stream');

// Verify that .push() and .unshift() can be called from 'data' listeners.

for (const method of ['push', 'unshift']) {
  const r = new Readable({ read() {} });
  r.once('data', common.mustCall((chunk) => {
    assert.strictEqual(r.readableLength, 0);
    r[method](chunk);
    assert.strictEqual(r.readableLength, chunk.length);

    r.on('data', common.mustCall((chunk) => {
      assert.strictEqual(chunk.toString(), 'Hello, world');
    }));
  }));

  r.push('Hello, world');
}

// deno-fmt-ignore-file
// deno-lint-ignore-file

// Copyright Joyent and Node contributors. All rights reserved. MIT license.
// Taken from Node 18.12.0
// This file is automatically generated by "node/_tools/setup.ts". Do not modify this file manually

'use strict';
require('../common');

const assert = require('assert');
const fs = require('fs');
const path = require('path');

const tmpdir = require('../common/tmpdir');
tmpdir.refresh();

// O_WRONLY without O_CREAT shall fail with ENOENT
const pathNE = path.join(tmpdir.path, 'file-should-not-exist');
assert.throws(
  () => fs.openSync(pathNE, fs.constants.O_WRONLY),
  (e) => e.code === 'ENOENT'
);

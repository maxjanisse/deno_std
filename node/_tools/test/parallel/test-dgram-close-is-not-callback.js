// deno-fmt-ignore-file
// deno-lint-ignore-file

// Copyright Joyent and Node contributors. All rights reserved. MIT license.
// Taken from Node 18.12.0
// This file is automatically generated by "node/_tools/setup.ts". Do not modify this file manually

'use strict';
const common = require('../common');
const dgram = require('dgram');

const buf = Buffer.alloc(1024, 42);

const socket = dgram.createSocket('udp4');

// Get a random port for send
const portGetter = dgram.createSocket('udp4')
  .bind(0, 'localhost', common.mustCall(() => {
    socket.send(buf, 0, buf.length,
                portGetter.address().port,
                portGetter.address().address);

    // If close callback is not function, ignore the argument.
    socket.close('bad argument');
    portGetter.close();

    socket.on('close', common.mustCall());
  }));

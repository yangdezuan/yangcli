#!/usr/bin/env node

const program = require('commander')
const yang = require('../src/generate')

/**
 * Usage.
 */

program
  .command('generate')
  .description('quick generate your file')
  .alias('init')
  .action(function(type, name) {
    yang.run(type, name)
  })
program.parse(process.argv)

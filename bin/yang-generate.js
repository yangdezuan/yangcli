#!/usr/bin/env node

const program = require('commander')
const yang = require('../src/generate')
const chalk = require('chalk')

/**
 * Usage.
 */

program
  .command('generate')
  .description('quick generate your file')
  .alias('g')
  .description('初始化项目')
  .action(function(type, name) {
    console.log(chalk.default.bold(require('../package').version))
    yang.run(type, name)
  })
program.parse(process.argv)

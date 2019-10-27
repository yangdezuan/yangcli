/**
 * Created by yang on 19/10/26.
 */

const fs = require('fs-extra')
const chalk = require('chalk')
const prefix = require('global-prefix')
exports.run = function(type, name) {
  // file is type ,
  fs.pathExists('src', (err, exists) => {
    if (!exists) {
      console.log('src folder is not defined')
    } else {
      switch (type) {
        case 'local':
          const pageFile = './src/page/' + name + '/' + name + '.vue'
          const styleFile = './src/page/' + name + '/' + name + '.less'
          const jsFile = './src/page/' + name + '/' + name + '.js'
          fs.pathExists(pageFile, (err, exists) => {
            if (exists) {
              console.log('this file has created')
            } else {
              fs.copy('/src/template/page.vue', pageFile, err => {
                if (err) return console.error(err)
                console.log(pageFile + '  has created')
              })
            }
          })
          break
        case 'page':
          const pageFile = './src/page/' + name + '/' + name + '.vue'
          const styleFile = './src/page/' + name + '/' + name + '.less'
          const jsFile = './src/page/' + name + '/' + name + '.js'
          fs.pathExists(pageFile, (err, exists) => {
            if (exists) {
              console.log('this file has created')
            } else {
              fs.copy(
                prefix + '/node_modules/6yang-cli/src/template/page.vue',
                pageFile,
                err => {
                  if (err) return console.error(err)
                  console.log(pageFile + '  has created')
                }
              )
              fs.copy(
                prefix + '/node_modules/6yang-cli/src/template/page.less',
                styleFile,
                err => {
                  if (err) return console.error(err)
                  console.log(styleFile + '  has created')
                }
              )
              fs.copy(
                prefix + '/node_modules/6yang-cli/src/template/page.js',
                jsFile,
                err => {
                  if (err) return console.error(err)
                  console.log(jsFile + '  has created')
                }
              )
            }
          })
          break
        case 'component':
          const componentFile = './src/components/' + name + '/' + name + '.vue'
          const cssFile = './src/components/' + name + '/' + name + '.less'
          const jsxFile = './src/components/' + name + '/' + name + '.js'
          fs.pathExists(componentFile, (err, exists) => {
            if (exists) {
              console.log('this file has created')
            } else {
              fs.copy(
                prefix + '/node_modules/6yang-cli/src/template/component.vue',
                componentFile,
                err => {
                  if (err) return console.error(err)
                  console.log(componentFile + '  has created')
                }
              )
              fs.copy(
                prefix + '/node_modules/6yang-cli/src/template/component.less',
                cssFile,
                err => {
                  if (err) return console.error(err)
                  console.log(cssFile + '  has created')
                }
              )
              fs.copy(
                prefix + '/node_modules/6yang-cli/src/template/component.js',
                jsxFile,
                err => {
                  if (err) return console.error(err)
                  console.log(componentFile + '  has created')
                }
              )
            }
          })
          break
        default:
          console.log(
            chalk.red(
              `ERROR: uncaught type , you should input like $ yang g page demo`
            )
          )
          console.log()
          console.log('  Examples:')
          console.log()
          console.log(chalk.gray('    # create a new page'))
          console.log('    $ yang g page product')
          console.log()
          console.log(chalk.gray('    # create a new component'))
          console.log('    $ yang g component  product')
          console.log()
          console.log(chalk.gray('    # create a new store'))
          console.log('    $ yang g store  product')
          console.log()
          break
      }
    }
  })
}

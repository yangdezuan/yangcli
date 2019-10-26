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
      const pageFile = './src/' + type
      fs.pathExists(pageFile, (err, exists) => {
        if (exists) {
          console.log('this file has created')
        } else {
          //var file = "wm.txt";
          fs.ensureDir(pageFile, function(err) {
            if (err) return console.error(err)
            console.log(pageFile + '  has created')
          })
          fs.copy(
            prefix + '/node_modules/6yang-cli/src/template/page.vue',
            pageFile,
            err => {
              if (err) return console.error(err)
              console.log(pageFile + '  has created')
            }
          )
        }
      })
    }
  })
}

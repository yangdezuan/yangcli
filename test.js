/**
 * Created by jackyang on 19/10/26.
 */
const fs = require('fs-extra')
const prefix = require('global-prefix')
const chalk = require('chalk')
const version = chalk.default.blue(require('./package').version)
console.log(prefix)
console.log(version)
const name = 'test'
const pageFile = './src/page/' + name + '/' + name + '.vue'
const styleFile = './src/page/' + name + '/' + name + '.less'
/* fs.copy(
  prefix + '/node_modules/6yang-cli/src/template/aa.vue',
  pageFile,
  err => {
    if (err) return console.error(err)

    console.log(pageFile + '  has created')
  }
)
return */
fs.pathExists(pageFile, (err, exists) => {
  if (exists) {
    console.log(chalk.default.bold('当前文件夹已经被创建'))
  } else {
    fs.copy('./src/template/page.vue', pageFile, err => {
      if (err) return console.error(err)

      console.log(pageFile + '  has created')
    })
    fs.copy('./src/template/page.less', styleFile, err => {
      if (err) return console.error(err)

      console.log(styleFile + '  has created')
    })
  }
})

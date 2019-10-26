/**
 * Created by jackyang on 19/10/26.
 */
const fs = require('fs-extra')

const name = 'test'
const pageFile = './src/page/' + name + '/' + name + '.vue'
const styleFile = './src/page/' + name + '/' + name + '.less'
fs.pathExists(pageFile, (err, exists) => {
  if (exists) {
    console.log('当前文件夹已经被创建')
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

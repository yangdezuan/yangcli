/**
 * Created by yangshaoping on 17/10/11.
 */

const fs = require('fs-extra')
const _ = require('lodash')
const prefix = require('global-prefix')
const exec = require('child_process').exec

var path = require('path')
console.log('. = %s', path.resolve('.'))
console.log('__dirname = %s', __dirname)

const name = 'yang'
const pageFile = './src1/' // + name
const styleFile = './src/page/' + name + '/' + name + '.less'
console.log(prefix)
exec('xcopy ' + path.resolve(__dirname) + ' aa', (err, stdout, stderr) => {
  // console.log('运行错误',err);
  console.log('标准输出流', stdout)
  // console.log('错误输出',stderr);
})

fs.pathExists(pageFile, (err, exists) => {
  if (exists) {
    console.log('this file has created')
  } else {
    const pageFile = './src/' + name
    fs.pathExists(pageFile, (err, exists) => {
      if (exists) {
        console.log('this file has created')
      } else {
        //var file = "wm.txt";
        fs.ensureDir(pageFile, function(err) {
          console.log(err)
        })
      }
    })
  }
})

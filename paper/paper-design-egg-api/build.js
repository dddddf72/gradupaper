'use strict';
// console.log(__dirname);
const pkgInfo = require('./package');
pkgInfo.egg.typescript = false;
// console.log(__filename) //打印所在的snapshot路径，生产环境可以删除
require(__dirname + '/node_modules/egg-scripts/bin/egg-scripts.js')
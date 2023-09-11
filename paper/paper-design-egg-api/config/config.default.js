/* eslint valid-jsdoc: "off" */

'use strict';
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
  **/

  const config = exports = {
    view: {
      mapping: {
        '.html': 'arttemplate'
      }
    }
  };

config.cluster = {
  listen: {
  path: '',
  port: 7001,
  hostname: '124.70.164.225', //localhost
  }
  };

  config.mongoose = {
    clients: {
      books: {
        url: 'mongodb://****:****@124.70.164.225:27017/bookMall?authSource=admin',
        options: {
          useNewUrlParser: true
        },
      }
    }
  }
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1616979825846_3147';

  // add your middleware config here

  // config.middleware = ['cors']
  // ctx=>{return ctx.header.origin}
  config.cors = {
    credentials: true,
    allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS",
    origin: ctx=>{return ctx.header.origin}
  }

  exports.multipart = {
    mode: 'stream',
    fileSize:'50mb'
  };



  config.security = {
    csrf: {
      enable: false,
    },
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };


  return {
    ...config,
    ...userConfig,
  };
};

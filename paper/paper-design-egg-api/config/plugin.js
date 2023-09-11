'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  mongoose: {
    enable: true,
    package: 'egg-mongoose'
  },
  arttemplate: {
    enable: true,
    package: 'egg-view-arttemplate'
  },
  cors: {
    enable: true,
    package:'egg-cors'
  }
};

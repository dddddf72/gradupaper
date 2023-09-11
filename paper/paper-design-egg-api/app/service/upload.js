'use strict';
const Service = require('egg').Service;
const fs = require('fs');
const path = require('path');


class UploadService extends Service {
async index() {
    const ctx = this.ctx;
    const yourstream = await ctx.getFileStream();
    const name = yourstream.filename
    const writerStream = fs.createWriteStream(path.join(this.config.baseDir, `app/public/upload/${name}`));
    yourstream.pipe(writerStream);
    let result = yourstream.fields
    return {name,result};
    }
}
module.exports = UploadService;
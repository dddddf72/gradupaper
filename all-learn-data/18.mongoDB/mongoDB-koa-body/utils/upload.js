// localPath:上传图片所在的本地路径
// uploadName:图片上传至服务器的图片名称
const fs = require('fs')    //实现文件读写
function fileUpload(localPath, uploadName) {
    // 创建可读流
    const reader = fs.createReadStream(localPath);
    // 获取上传文件扩展名
    let filePath = process.cwd() + `/static/${uploadName}`;
    // 创建可写流
    const upStream = fs.createWriteStream(filePath);
    // 可读流通过管道写入可写流
    reader.pipe(upStream);
}
module.exports = fileUpload;
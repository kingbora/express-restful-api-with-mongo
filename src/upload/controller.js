/**
 * Created by wenbo.kuang on 2018/6/5.
 */
module.exports = {
    upload: (req, res, next) => {
        const file = req.file;

        console.log('文件类型：%s', file.mimetype);
        console.log('原始文件名：%s', file.originalname);
        console.log('文件大小：%s', file.size);
        console.log('文件保存路径：%s', file.path);
    }
};
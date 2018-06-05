/**
 * Created by wenbo.kuang on 2018/6/5.
 */
module.exports = {
    upload: (req, res, next) => {
        const file = req.files[0];
        res.json({
            path: file.destination.replace(/^public\//,"") + "/" + file.filename
        });
    }
};
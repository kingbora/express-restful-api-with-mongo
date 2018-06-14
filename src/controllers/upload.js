/**
 * Created by wenbo.kuang on 2018/6/13.
 */
const operation = {
    upload: (req, res) => {
        const file = req.files[0];
        res.status(200).json({
            imageInfo: {
                type: file.mimetype,
                originalName: file.originalname,
                size: file.size,
                path: file.path
            },
            url: file.destination.replace(/^public\//, "") + "/" + file.filename
        });
    },
    download: (req, res) => {

    }
};

module.exports = operation;
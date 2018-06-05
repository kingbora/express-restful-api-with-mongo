/**
 * Created by wenbo.kuang on 2018/6/4.
 */
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const articleSchema = new Schema({
    id: {
        index: true, //是否添加索引
        type: String
    },
    content: {
        type: String
    },
    meta: {
        createAt: {
            type: Date,
            default: Date.now()
        },
        updateAt: {
            type: Date,
            default: Date.now()
        }
    }
});

articleSchema.pre("save", (next) => {
    const date = new Date();
    const format_date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    if (this.isNew) {
        this.updateAt = this.createAt = format_date;
    } else {
        this.updateAt = format_date;
    }
    next();
});

//为Model本身添加方法
articleSchema.statics = {

};

//为Model实例添加方法
articleSchema.methods = {

};

const Article = mongoose.model("Articles", articleSchema);

export default Article;
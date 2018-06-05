/**
 * Created by wenbo.kuang on 2018/6/5.
 */
module.exports = {
    getDateFormat: () => {
        const date = new Date();
        const year = date.getFullYear() + "";
        let month = date.getMonth() + 1;
        let day = date.getDate();
        if (month < 10) {
            month = "0" + month;
        } else {
            month = month + "";
        }

        if (day < 10) {
            day = "0" + day;
        } else {
            day = day + "";
        }
        return year + month + day;
    }
};
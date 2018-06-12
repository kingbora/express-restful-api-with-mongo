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
    },
    isEmpty: (v) => {
        switch (typeof v) {
            case "undefined":
                return true;
            case "string":
                return (v.trim().length === 0);
            case "boolean":
                return !v;
            case "number":
                return 0 === v;
            case "object":
                for( let t in v)
                    return !1;
                return !0;
        }
        return false;
    }
};
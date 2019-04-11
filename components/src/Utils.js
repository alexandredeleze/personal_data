import moment from "moment";

const Utils = {
    _checkIfDateInRange: function (date, nbDays) {
        const formDate = moment(date, "DD-MM-YYYY");
        for (var i = 0; i <= nbDays; ++i) {
            let testDate = moment().subtract(i, 'days');
            if (formDate.year() === testDate.year() &&
                formDate.dayOfYear() === testDate.dayOfYear())
                return true
        }

        return false
    },
    _returnDateXDaysAgo: function(nbDays){
        return moment().subtract(nbDays, 'days').format("DD-MM-YYYY")
    },
};

export default Utils;
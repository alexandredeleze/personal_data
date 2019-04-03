import moment from "moment";

const Utils = {
    _checkIfDateInRange: function (date, nbreDays) {
        const formDate = moment(date, "DD-MM-YYYY");
        for (var i = 0; i <= nbreDays; ++i) {
            let testDate = moment().subtract(i, 'days');
            if (formDate.year() === testDate.year() &&
                formDate.dayOfYear() === testDate.dayOfYear())
                return true
        }

        return false
    }
};

export default Utils;
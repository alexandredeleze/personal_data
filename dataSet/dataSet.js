import UtilsRedux from "../components/src/UtilsRedux";
import Utils from "../components/src/Utils";

const dataSet = {
    _dataSetTest: function () {
        UtilsRedux._addToDataBase("Breakfast", Utils._returnDateXDaysAgo(1), true);
        UtilsRedux._addToDataBase("Clean teeth", Utils._returnDateXDaysAgo(1), true);
        UtilsRedux._addToDataBase("Breakfast", Utils._returnDateXDaysAgo(2), true);
        UtilsRedux._addToDataBase("Breakfast", Utils._returnDateXDaysAgo(3), true);
        UtilsRedux._addToDataBase("Breakfast", Utils._returnDateXDaysAgo(27), false);

        UtilsRedux._updateDataBase("Breakfast", Utils._returnDateXDaysAgo(1), true, true);
        UtilsRedux._updateDataBase("Clean teeth", Utils._returnDateXDaysAgo(1), true, true);
        UtilsRedux._updateDataBase("Breakfast", Utils._returnDateXDaysAgo(2), true, true);
        UtilsRedux._updateDataBase("Breakfast", Utils._returnDateXDaysAgo(3), false, true);
        UtilsRedux._updateDataBase("Breakfast", Utils._returnDateXDaysAgo(27), true, false);
    },
    _exp1: function () {
        // Day - 6
        _addRepetitiveElements(6, true, true, 3);
        _addRepetitiveElements(6, false, true, 2);
        _addRepetitiveElements(6, true, false, 1);

        // Day -5
        _addRepetitiveElements(5, true, true, 4);
        _addRepetitiveElements(5, false, true, 1);
        _addRepetitiveElements(5, true, false, 1);

        // Day -4
        _addRepetitiveElements(4, true, true, 3);
        _addRepetitiveElements(4, false, true, 2);
        _addRepetitiveElements(4, false, false, 1);

        // Day -3
        _addRepetitiveElements(3, true, true, 3);
        _addRepetitiveElements(3, false, true, 2);
        _addRepetitiveElements(3, true, false, 1);

        // Day -2
        _addRepetitiveElements(2, true, true, 2);
        _addRepetitiveElements(2, false, true, 3);
        _addRepetitiveElements(2, false, false, 1);

        // Day -1
        _addRepetitiveElements(1, true, true, 3);
        _addRepetitiveElements(1, false, true, 2);
        _addRepetitiveElements(1, false, false, 1);

        // Day -0
        _addRepetitiveElements(0, true, true, 3);
        _addRepetitiveElements(0, false, true, 2);
        _addRepetitiveElements(0, true, false, 1);
    },
    _exp2: function () {
        // Day - 6
        _addRepetitiveElements(6, true, true, 1);
        _addRepetitiveElements(6, false, true, 4);
        _addRepetitiveElements(6, false, false, 1);

        // Day -5
        _addRepetitiveElements(5, true, true, 2);
        _addRepetitiveElements(5, false, true, 3);
        _addRepetitiveElements(5, false, false, 1);

        // Day -4
        _addRepetitiveElements(4, true, true, 2);
        _addRepetitiveElements(4, false, true, 3);
        _addRepetitiveElements(4, true, false, 1);

        // Day -3
        _addRepetitiveElements(3, true, true, 2);
        _addRepetitiveElements(3, false, true, 3);
        _addRepetitiveElements(3, true, false, 1);

        // Day -2
        _addRepetitiveElements(2, true, true, 3);
        _addRepetitiveElements(2, false, true, 2);
        _addRepetitiveElements(2, true, false, 1);

        // Day -1
        _addRepetitiveElements(1, true, true, 3);
        _addRepetitiveElements(1, false, true, 2);
        _addRepetitiveElements(1, false, false, 1);

        // Day -0
        _addRepetitiveElements(0, true, true, 3);
        _addRepetitiveElements(0, false, true, 2);
        _addRepetitiveElements(0, true, false, 1);

    },
    _exp3: function () {
        // Day - 6
        _addRepetitiveElements(6, true, true, 3);
        _addRepetitiveElements(6, false, true, 2);
        _addRepetitiveElements(6, true, false, 1);

        // Day -5
        _addRepetitiveElements(5, true, true, 3);
        _addRepetitiveElements(5, false, true, 2);
        _addRepetitiveElements(5, false, false, 1);

        // Day -4
        _addRepetitiveElements(4, true, true, 3);
        _addRepetitiveElements(4, false, true, 3);
        _addRepetitiveElements(4, true, false, 1);

        // Day -3
        _addRepetitiveElements(3, true, true, 3);
        _addRepetitiveElements(3, false, true, 3);
        _addRepetitiveElements(3, true, false, 2);

        // Day -2
        _addRepetitiveElements(2, true, true, 3);
        _addRepetitiveElements(2, false, true, 4);
        _addRepetitiveElements(2, true, false, 1);

        // Day -1
        _addRepetitiveElements(1, true, true, 3);
        _addRepetitiveElements(1, false, true, 5);
        _addRepetitiveElements(1, true, false, 1);

        // Day -0
        _addRepetitiveElements(0, true, true, 4);
        _addRepetitiveElements(0, false, true, 6);
        _addRepetitiveElements(0, true, false, 1);

    },
    _exp4: function () {
        // Day - 6
        _addRepetitiveElements(6, true, true, 3);
        _addRepetitiveElements(6, false, true, 5);
        _addRepetitiveElements(6, true, false, 2);

        // Day -5
        _addRepetitiveElements(5, true, true, 3);
        _addRepetitiveElements(5, false, true, 5);
        _addRepetitiveElements(5, true, false, 1);

        // Day -4
        _addRepetitiveElements(4, true, true, 4);
        _addRepetitiveElements(4, false, true, 2);
        _addRepetitiveElements(4, true, false, 2);

        // Day -3
        _addRepetitiveElements(3, true, true, 2);
        _addRepetitiveElements(3, false, true, 3);
        _addRepetitiveElements(3, true, false, 1);

        // Day -2
        _addRepetitiveElements(2, true, true, 3);
        _addRepetitiveElements(2, false, true, 2);
        _addRepetitiveElements(2, true, false, 1);

        // Day -1
        _addRepetitiveElements(1, true, true, 3);
        _addRepetitiveElements(1, false, true, 1);
        _addRepetitiveElements(1, true, false, 1);

        // Day -0
        _addRepetitiveElements(0, true, true, 4);
        _addRepetitiveElements(0, false, true, 0);
        _addRepetitiveElements(0, true, false, 1);

    },
};

function _addRepetitiveElements(days, completed, priority, number) {
    for (let i = 0; i < number; ++i) {
        UtilsRedux._addToDataBase("el1" + completed + priority + i, Utils._returnDateXDaysAgo(days), priority);
        UtilsRedux._updateDataBase("el1" + completed + priority + i, Utils._returnDateXDaysAgo(days), completed, priority);
    }
}
export default dataSet;
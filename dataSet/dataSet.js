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
    }
}
export default dataSet;
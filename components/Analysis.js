import React from 'react';
import {StyleSheet, View} from 'react-native';
import Page from "./Page";
import {connect} from "react-redux";
import Utils from "./src/Utils";
import UtilsRedux from "./src/UtilsRedux";
import moment from "moment";
import AnalysisButton from "./src/AnalysisButton";
import Circle from "./src/Circle";

class Analysis extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weekly: true,
        };
        this._isWeekly = this._isWeekly.bind(this);
    }
    componentDidMount() {
        UtilsRedux._addToDataBase("Breakfast", moment().subtract(1, 'days').format("DD-MM-YYYY"), true);
        UtilsRedux._addToDataBase("Clean teeth", moment().subtract(1, 'days').format("DD-MM-YYYY"), true);
        UtilsRedux._addToDataBase("Breakfast", moment().subtract(2, 'days').format("DD-MM-YYYY"), true);
        UtilsRedux._addToDataBase("Breakfast", moment().subtract(3, 'days').format("DD-MM-YYYY"), true);
        UtilsRedux._addToDataBase("Breakfast", moment().subtract(30, 'days').format("DD-MM-YYYY"), false);

        UtilsRedux._updateDataBase("Breakfast", moment().subtract(1, 'days').format("DD-MM-YYYY"), true, true);
        UtilsRedux._updateDataBase("Breakfast", moment().subtract(2, 'days').format("DD-MM-YYYY"), true, true);
        UtilsRedux._updateDataBase("Breakfast", moment().subtract(3, 'days').format("DD-MM-YYYY"), false, true);
        UtilsRedux._updateDataBase("Breakfast", moment().subtract(30, 'days').format("DD-MM-YYYY"), true, false);

    }

    _taskInRangeOfDate(nbreDays) {
        return this.props.dataBase.filter(item => Utils._checkIfDateInRange(item.date, nbreDays))
    }

    _priorityTask(weekly) {
        return weekly ? this._taskInRangeOfDate(7).filter(item => item.priority) : this._taskInRangeOfDate(31).filter(item => item.priority)
    }

    _notPriorityTask(weekly) {
        return weekly ? this._taskInRangeOfDate(7).filter(item => !item.priority) : this._taskInRangeOfDate(31).filter(item => !item.priority)
    }

    _percentagePriority(priority, weekly) {
        let listTask = priority ? this._priorityTask(weekly) : this._notPriorityTask(weekly);
        let doneTask = listTask.filter(item => item.completed).length;
        let totalTask = listTask.length;
        if (totalTask !== 0) {
            return parseInt(doneTask * 100 / totalTask);
        }
        return 0;

    }

    _isWeekly(arg) {
        this.setState({weekly: arg})
    }
    render() {
        let priorityPercentage = this._percentagePriority(true, this.state.weekly);
        let notPriorityPercentage = this._percentagePriority(false, this.state.weekly);
        return (
            <Page>
                <View style={styles.container_circle}>
                    <Circle text={'Priority'} percentage={priorityPercentage}/>
                    <Circle text={'Not priority'} percentage={notPriorityPercentage}/>
                </View>
                <AnalysisButton function={this._isWeekly}/>
            </Page>

        );
    }
}

const styles = StyleSheet.create({
    container_circle: {
        flex: 5,
        flexDirection: 'row',
    },
});

const mapStateToProps = state => {
    return {
        dataBase: state.dataBaseReducer.dataBase
    }
};

export default connect(mapStateToProps)(Analysis)
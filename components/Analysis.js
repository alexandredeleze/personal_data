import React from 'react';
import {StyleSheet, View} from 'react-native';
import Page from "./Page";
import {connect} from "react-redux";
import Utils from "./src/Utils";
import UtilsRedux from "./src/UtilsRedux";
import AnalysisButton from "./src/AnalysisButton";
import Circle from "./src/Circle";
import BarChart from "./src/BarChart";


class Analysis extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weekly: true,
        };
        this._isWeekly = this._isWeekly.bind(this);
    }
    componentDidMount() {
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

    _taskInRangeOfDate(nbDays) {
        return this.props.dataBase.filter(item => Utils._checkIfDateInRange(item.date, nbDays))
    }

    _priorityTask(weekly) {
        return weekly ? this._taskInRangeOfDate(6).filter(item => item.priority) : this._taskInRangeOfDate(27).filter(item => item.priority)
    }

    _notPriorityTask(weekly) {
        return weekly ? this._taskInRangeOfDate(6).filter(item => !item.priority) : this._taskInRangeOfDate(27).filter(item => !item.priority)
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
                <View style={styles.bar_chart_container}>
                    <BarChart data={this.props.dataBase} weekly={this.state.weekly}/>
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
    bar_chart_container:{
        flex:5,
        padding:10,
    }
});

const mapStateToProps = state => {
    return {
        dataBase: state.dataBaseReducer.dataBase
    }
};

export default connect(mapStateToProps)(Analysis)
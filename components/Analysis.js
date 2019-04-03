import React from 'react';
import {Text, View} from 'react-native';
import Page from "./Page";
import {connect} from "react-redux";
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import Utils from "./src/Utils";
import UtilsRedux from "./src/UtilsRedux";
import moment from "moment";

class Analysis extends React.Component {
    componentDidMount() {
    //     let today = new Date().getDate();
        UtilsRedux._addToDataBase("Breakfast", moment().format("DD-MM-YYYY"), true);
        UtilsRedux._addToDataBase("Breakfast", moment().subtract(1, 'days').format("DD-MM-YYYY"), true);
        UtilsRedux._addToDataBase("Breakfast", moment().subtract(2, 'days').format("DD-MM-YYYY"), true);
        UtilsRedux._addToDataBase("Breakfast", moment().subtract(3, 'days').format("DD-MM-YYYY"), true);
        UtilsRedux._updateDataBase("Breakfast", moment().format("DD-MM-YYYY"), false, true);
        UtilsRedux._updateDataBase("Breakfast", moment().subtract(1, 'days').format("DD-MM-YYYY"), true, true);
        UtilsRedux._updateDataBase("Breakfast", moment().subtract(2, 'days').format("DD-MM-YYYY"), true, true);
        UtilsRedux._updateDataBase("Breakfast", moment().subtract(3, 'days').format("DD-MM-YYYY"), false, true);
    }

    _taskInRangeOfDate(nbreDays) {
        return this.props.dataBase.filter(item => Utils._checkIfDateInRange(item.date, nbreDays))
    }

    _priorityTask() {
        return this._taskInRangeOfDate(7).filter(item => item.priority)
    }

    _percentagePriority() {
        let priorityTask = this._priorityTask();
        let doneTask = priorityTask.filter(item => item.completed).length;
        let totalTask = priorityTask.length;
        if (totalTask !== 0) {
            return parseInt(doneTask * 100 / totalTask);
        }
        return 0;

    }
    render() {
        return (
            <Page>
                <Text>Hello from Analysis!</Text>
                <AnimatedCircularProgress
                    size={120}
                    width={15}
                    fill={this._percentagePriority()}
                    tintColor="#00e0ff"
                    onAnimationComplete={() => console.log('onAnimationComplete')}
                    backgroundColor="#3d5875">
                    {
                        () => <View>
                            <Text>Priority</Text>
                            <Text>{this._percentagePriority()}%</Text>
                        </View>

                    }

                </AnimatedCircularProgress>
            </Page>

        );
    }
}

const mapStateToProps = state => {
    return {
        dataBase: state.dataBaseReducer.dataBase
    }
};

export default connect(mapStateToProps)(Analysis)
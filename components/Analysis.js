import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
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

    _notPriorityTask() {
        return this._taskInRangeOfDate(7).filter(item => !item.priority)
    }

    _percentagePriority(priority) {
        let listTask = priority ? this._priorityTask() : this._notPriorityTask();
        let doneTask = listTask.filter(item => item.completed).length;
        let totalTask = listTask.length;
        if (totalTask !== 0) {
            return parseInt(doneTask * 100 / totalTask);
        }
        return 0;

    }
    render() {
        let priorityPercentage = this._percentagePriority(true);
        let notPriorityPercentage = this._percentagePriority(false);
        return (
            <Page>
                <View style={styles.container_circle}>
                    <View style={styles.container_circle_element}>
                        <AnimatedCircularProgress
                            size={120}
                            width={15}
                            fill={priorityPercentage}
                            tintColor="#00e0ff"
                            backgroundColor="#3d5875">
                            {
                                () => <View>
                                    <Text>Priority</Text>
                                    <Text>{priorityPercentage}%</Text>
                                </View>

                            }

                        </AnimatedCircularProgress>
                    </View>
                    <View style={styles.container_circle_element}>
                        <AnimatedCircularProgress
                            size={120}
                            width={15}
                            fill={notPriorityPercentage}
                            tintColor="#00e0ff"
                            backgroundColor="#3d5875">
                            {
                                () => <View>
                                    <Text>Not priority</Text>
                                    <Text>{notPriorityPercentage}%</Text>
                                </View>

                            }

                        </AnimatedCircularProgress>
                    </View>
                </View>
            </Page>

        );
    }
}

const styles = StyleSheet.create({
    container_circle: {
        flex: 2,
        flexDirection: 'row',
    },
    container_circle_element: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const mapStateToProps = state => {
    return {
        dataBase: state.dataBaseReducer.dataBase
    }
};

export default connect(mapStateToProps)(Analysis)
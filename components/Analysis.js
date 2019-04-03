import React from 'react';
import {Text, View} from 'react-native';
import Page from "./Page";
import {connect} from "react-redux";
import {AnimatedCircularProgress} from 'react-native-circular-progress';

class Analysis extends React.Component {
    // componentDidMount() {
    //     let today = new Date().getDate();
    //     UtilsRedux._addToDataBase("Breakfast", today, true);
    //     UtilsRedux._addToDataBase("Breakfast", today - 1, true);
    //     UtilsRedux._addToDataBase("Breakfast", today - 2, true);
    //     UtilsRedux._addToDataBase("Breakfast", today - 3, true);
    //     UtilsRedux._updateDataBase("Breakfast", today, false, true);
    //     UtilsRedux._updateDataBase("Breakfast", today - 1, true, true);
    //     UtilsRedux._updateDataBase("Breakfast", today - 2, true, true);
    //     UtilsRedux._updateDataBase("Breakfast", today - 3, false, true);
    // }

    _weekTask() {
        let today = new Date().getDate();
        return this.props.dataBase.filter(item => item.date <= today && item.date >= today - 6)
    }

    _priorityTask() {
        return this._weekTask().filter(item => item.priority)
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
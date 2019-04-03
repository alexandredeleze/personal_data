import React from 'react';
import {Text, View} from 'react-native';
import Page from "./Page";
import {connect} from "react-redux";
import {AnimatedCircularProgress} from 'react-native-circular-progress';

class Analysis extends React.Component {
    _addHighPriority() {
        const action = {type: "ADD_HIGH", value: ""};
        this.props.dispatch(action)
    }
    _addLowPriority() {
        const action = {type: "ADD_LOW", value: ""};
        this.props.dispatch(action)
    }
    _removeHighPriority() {
        const action = {type: "REMOVE_HIGH", value: ""};
        this.props.dispatch(action)
    }
    _removeLowPriority() {
        const action = {type: "REMOVE_LOW", value: ""};
        this.props.dispatch(action)
    }

    _dailyTask() {
        let today = new Date().getDate();
        return this.props.dataBase.filter(item => item.date === today)
    }

    _priorityTask() {
        return this._dailyTask().filter(item => item.priority)
    }

    _percentagePriority() {
        let priorityTask = this._priorityTask();
        let doneTask = priorityTask.filter(item => item.completed).length;
        let totalTask = priorityTask.length;
        if (totalTask !== 0) {
            return doneTask / totalTask * 100;
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
                            <Text>Complete</Text>
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
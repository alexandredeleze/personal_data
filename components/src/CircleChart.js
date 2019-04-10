import React from 'react';
import {StyleSheet, View} from 'react-native';
import Utils from "./Utils";
import Circle from "./Circle";

class CircleChart extends React.Component {
    _taskInRangeOfDate(nbDays) {
        return this.props.data.filter(item => Utils._checkIfDateInRange(item.date, nbDays))
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
render() {
    let priorityPercentage = this._percentagePriority(true, this.props.weekly);
    let notPriorityPercentage = this._percentagePriority(false, this.props.weekly);
        return(
            <View style={styles.container_circle}>
                <Circle text={'Priority'} percentage={priorityPercentage}/>
                <Circle text={'Not priority'} percentage={notPriorityPercentage}/>
            </View>
        )
}

}

const styles = StyleSheet.create({
    container_circle: {
        flex: 5,
        flexDirection: 'row',
    },
});
export default CircleChart
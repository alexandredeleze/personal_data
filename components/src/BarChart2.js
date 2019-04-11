import React from 'react'
import {Grid, StackedBarChart, XAxis, YAxis} from 'react-native-svg-charts'
import {View} from 'react-native'
import * as scale from 'd3-scale'
import Utils from "./Utils";

class BarChart2 extends React.PureComponent {

    _groupBy(lists, element) {
        return lists.reduce(function (acc, obj) {
            let key = obj[element];
            if (!acc[key]) {
                acc[key] = [];
            }
            acc[key].push(obj);
            return acc;
        }, {});
    }

    _createDataForCharts() {
        let temp_not_completed = this._groupBy(this.props.data, "date");
        let temp_priority = this._groupBy(this.props.data, "date");
        let temp_not_priority = this._groupBy(this.props.data, "date");
        let returnData = [];

        Object.keys(temp_not_completed).map(keys => temp_not_completed[keys] = temp_not_completed[keys].filter(element => !element.completed).reduce(acc => acc += 1, 0));
        Object.keys(temp_priority).map(keys => temp_priority[keys] = temp_priority[keys].filter(element => element.completed && element.priority).reduce(acc => acc += 1, 0));
        Object.keys(temp_not_priority).map(keys => temp_not_priority[keys] = temp_not_priority[keys].filter(element => element.completed && !element.priority).reduce(acc => acc += 1, 0));


        if (this.props.weekly) {
            for (let i = 0; i < 7; ++i) {
                let date = Utils._returnDateXDaysAgo(i);
                let value_not_completed = temp_not_completed[date] === undefined ? 0 : temp_not_completed[date];
                let value_priority = temp_priority[date] === undefined ? 0 : temp_priority[date];
                let value_not_priority = temp_not_priority[date] === undefined ? 0 : temp_not_priority[date];
                returnData = [
                    ...returnData,
                    {not_completed: value_not_completed, priority: value_priority, not_priority: value_not_priority}
                ]
            }
        } else {
            for (let week = 0; week < 4; ++week) {
                let value_not_completed = 0;
                let value_priority = 0;
                let value_not_priority = 0;
                for (let day = 0; day < 7; ++day) {
                    let date = Utils._returnDateXDaysAgo(day + 7 * week);
                    value_not_completed += temp_not_completed[date] === undefined ? 0 : temp_not_completed[date];
                    value_priority += temp_priority[date] === undefined ? 0 : temp_priority[date];
                    value_not_priority += temp_not_priority[date] === undefined ? 0 : temp_not_priority[date];

                }
                returnData = [
                    ...returnData,
                    {not_completed: value_not_completed, priority: value_priority, not_priority: value_not_priority}
                ]
            }

        }
        return returnData

    }

    _createListLastDays(){
        let returnValue = [];
        let i = 0;
        if(this.props.weekly){
            for(i=0;i<7;++i){
                returnValue = [
                    ...returnValue,
                    Utils._returnDateXDaysAgo(i).substr(0,5),
                ]
            }
        }
        else{
            for(i=0;i<4;++i){
                returnValue = [
                    ...returnValue,
                    'Week - '+i,
                ]
            }
        }

        return returnValue;
    }

    render() {
        const data = this._createDataForCharts();
        const months = this._createListLastDays();
        const yData = data.map(item => item.not_completed + item.priority + item.not_priority);
        const colors = ['rgba(238,15,8,1)', 'rgba(13,162,65,0.8)', 'yellow'];
        const keys = ['not_completed', 'priority', 'not_priority'];
        return (
            <View style={{height: 300, padding: 20, flexDirection: 'row'}}>
                <YAxis data={yData}
                       contentInset={{top: 10, bottom: 10}}
                       style={{marginBottom: 30}}
                />
                <View style={{flex: 1, marginLeft: 10}}>
                    <StackedBarChart
                        style={{flex: 1}}
                        gridMin={0}
                        keys={keys}
                        colors={colors}
                        data={data}
                        showGrid={false}
                        contentInset={{top: 10, bottom: 10}}
                    >
                        <Grid direction={Grid.Direction.HORIZONTAL}/>
                    </StackedBarChart>
                    <XAxis
                        style={{marginTop: 10}}
                        data={data}
                        scale={scale.scaleBand}
                        formatLabel={(value, index) => months[index]}
                        labelStyle={{color: 'black',fontSize:'1em'}}
                    />
                </View>
            </View>
        )
    }

}

export default BarChart2
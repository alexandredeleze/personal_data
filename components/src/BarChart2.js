import React from 'react'
import { StackedBarChart, XAxis } from 'react-native-svg-charts'
import { View } from 'react-native'
import * as scale from 'd3-scale'
import Utils from "./Utils";

class BarChart2 extends React.PureComponent {

    _groupBy(lists, element) {
        return lists.reduce(function (acc, obj) {
            var key = obj[element];
            if (!acc[key]) {
                acc[key] = [];
            }
            acc[key].push(obj);
            return acc;
        }, {});
    }

    _createDataForCharts(){
        let temp_not_completed = this._groupBy(this.props.data,"date");
        let temp_priority = this._groupBy(this.props.data,"date");
        let temp_not_priority = this._groupBy(this.props.data,"date");
        let returnData = [];

        Object.keys(temp_not_completed).map(keys=>temp_not_completed[keys] = temp_not_completed[keys].filter(element =>!element.completed).reduce(acc=>acc+=1,0));
        Object.keys(temp_priority).map(keys=>temp_priority[keys] = temp_priority[keys].filter(element =>element.completed && element.priority).reduce(acc=>acc+=1,0));
        Object.keys(temp_not_priority).map(keys=>temp_not_priority[keys] = temp_not_priority[keys].filter(element =>element.completed && !element.priority).reduce(acc=>acc+=1,0));


        if(this.props.weekly){
            for(let i=0;i<7;++i){
                let date = Utils._returnDateXDaysAgo(i)
                let value_not_completed= temp_not_completed[date]===undefined?0:temp_not_completed[date];
                let value_priority= temp_priority[date]===undefined?0:temp_priority[date];
                let value_not_priority = temp_not_priority[date]===undefined?0:temp_not_priority[date];
                returnData=[
                    ...returnData,
                    {not_completed:value_not_completed, priority:value_priority, not_priority:value_not_priority}
                ]
            }
        }
        else{
            for(let week=0;week<4;++week){
                let value_not_completed= 0
                let value_priority= 0
                let value_not_priority = 0
                for(let day=0;day<7;++day){
                    let date = Utils._returnDateXDaysAgo(day+7*week);
                    value_not_completed += temp_not_completed[date]===undefined?0:temp_not_completed[date];
                    value_priority += temp_priority[date]===undefined?0:temp_priority[date];
                    value_not_priority += temp_not_priority[date]===undefined?0:temp_not_priority[date];

                }
                returnData=[
                    ...returnData,
                    {not_completed:value_not_completed, priority:value_priority, not_priority:value_not_priority}
                ]
            }

        }
        return returnData

    }

    render() {
        const data = this._createDataForCharts();
        const months = data.map((item,index)=>index);

        const colors = [ 'red', 'green', 'yellow' ];
        const keys   = [ 'not_completed', 'priority', 'not_priority'];
        return (
            <View style={{ height: 200, padding: 20 }}>
                <StackedBarChart
                    style={ { height: 200 } }
                    keys={ keys }
                    colors={ colors }
                    data={ data }
                    showGrid={ false }
                    contentInset={ { top: 30, bottom: 30 } }
                />
                <XAxis
                    style={{ marginTop: 10 }}
                    data={ data }
                    scale={scale.scaleBand}
                    formatLabel={ (value, index) => months[index]}
                    labelStyle={ { color: 'black' } }
                />
            </View>
        )
    }

}

export default BarChart2
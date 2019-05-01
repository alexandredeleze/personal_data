import React, {Component} from "react";
import PureChart from "react-native-pure-chart";

import Utils from "./Utils";
import Colors from "./Colors";

class BarChart extends Component {
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

    _createDataForCharts(priority,completed){
        let temp = undefined;
        let returnData = [];
        if(!completed){
            temp = this._groupBy(this.props.data.filter(item => !item.completed),"date")
        }
        else{
           temp = this._groupBy(this.props.data.filter(item => item.priority === priority && item.completed),"date")
        }
        Object.keys(temp).map(keys=>temp[keys] = temp[keys].reduce(acc=>acc+=1,0));
        if(this.props.weekly){
            for(let i=0;i<7;++i){
                let date = Utils._returnDateXDaysAgo(i);
                let value = temp[date]===undefined?0:temp[date];
                returnData=[
                    ...returnData,
                    {x:date.substr(0,5),y:value}
                ]
            }
        }
        else{
            for(let week=0;week<4;++week){
                let value = 0;
                for(let day=0;day<7;++day){
                    let date = Utils._returnDateXDaysAgo(day+7*week);
                    value += temp[date]===undefined?0:temp[date]

                }
                returnData=[
                    ...returnData,
                    {x:'Week - '+week,y:value}
                ]
            }

        }
        return returnData

    }



    render() {
        let sampleData = [
            {
                seriesName: 'priority_completed',
                label:'Priority done',
                data: this._createDataForCharts(true,true),
                color: Colors.green
            },
            {
                seriesName: 'not_priority_completed',
                label:'Not priority done',
                data: this._createDataForCharts(false,true),
                color: Colors.yellow
            },
            {
                seriesName: 'not_completed',
                label:'Not done',
                data: this._createDataForCharts(undefined,false),
                color: Colors.red
            },
        ];
        return (
            <PureChart data={sampleData.reverse()} height={200} showEvenNumberXaxisLabel={false} type='bar'
                       style={{backgroundColor: 'transparent'}}/>
        );
    }
}

export default BarChart
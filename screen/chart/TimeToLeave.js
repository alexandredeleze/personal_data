import React, {Component} from 'react';
import {Chart} from "./Chart";

class TimeToLeave extends Component {
    static navigationOptions = {
        title: 'Time to leave',
    };

    render() {
        return (
            <Chart image={'time_to_leave'} title={'Time to leave'} navigation={this.props.navigation}/>
        );
    }
}

export {TimeToLeave};
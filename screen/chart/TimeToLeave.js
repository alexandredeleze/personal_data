import React, {Component} from 'react';
import {Chart} from "./Chart";

class TimeToLeave extends Component {
    static navigationOptions = {
        title: 'Time to leave',
    };

    render() {
        return (
            <Chart image={'null'} text={'Time to leave'} navigation={this.props.navigation}/>
        );
    }
}

export {TimeToLeave};
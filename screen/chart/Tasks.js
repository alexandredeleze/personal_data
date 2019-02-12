import React, {Component} from 'react';
import {Chart} from "./Chart";

class Tasks extends Component {
    static navigationOptions = {
        title: 'Tasks',
    };

    render() {
        return (
            <Chart image={'tasks'} title={'Tasks'} navigation={this.props.navigation}/>
        );
    }
}

export {Tasks};
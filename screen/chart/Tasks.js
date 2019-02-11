import React, {Component} from 'react';
import {Chart} from "./Chart";

class Tasks extends Component {
    static navigationOptions = {
        title: 'Tasks',
    };

    render() {
        return (
            <Chart image={'null'} text={'Tasks'} navigation={this.props.navigation}/>
        );
    }
}

export {Tasks};
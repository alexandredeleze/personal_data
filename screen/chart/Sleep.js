import React, {Component} from 'react';
import {Chart} from "./Chart";

class Sleep extends Component {
    static navigationOptions = {
        title: 'Sleep',
    };

    render() {
        return (
            <Chart image={'null'} text={'Sleep'} navigation={this.props.navigation}/>
        );
    }
}

export {Sleep};
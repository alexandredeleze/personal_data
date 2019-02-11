import React, {Component} from 'react';
import {Chart} from "./Chart";

class Synthesis extends Component {
    static navigationOptions = {
        title: 'Synthesis',
    };

    render() {
        return (
            <Chart image={'null'} text={'Synthesis'} navigation={this.props.navigation}/>
        );
    }
}

export {Synthesis};
import React, {Component} from 'react';
import {Chart} from "./Chart";

class Synthesis extends Component {
    static navigationOptions = {
        title: 'Synthesis',
    };

    render() {
        return (
            <Chart image={'synthesis'} title={'Synthesis'} navigation={this.props.navigation}/>
        );
    }
}

export {Synthesis};
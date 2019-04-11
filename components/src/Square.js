import React,{Component} from 'react';
import {View} from 'react-native';
class Square extends Component{
    render() {
        return(
            <View style={{height:8,width:8,backgroundColor:this.props.color,marginRight: 2,marginLeft: 5}}/>
        )
    }
}
export default Square
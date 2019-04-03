import React, {Component} from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native'

class CheckBox extends Component {
    render() {
        let data = this.props.data;
        let icon = data.priority ? require('../../resources/ic_priority.png') : require('../../resources/ic_priority_not.png');
        return (
            <TouchableOpacity onPress={this.props.onCheckBoxPressed}>
                <View style={{
                    width: Dimensions.get('window').width - 10,
                    paddingRight: 10,
                    paddingLeft: 10,
                    paddingTop: 10,
                    paddingBottom: 10,
                    backgroundColor: 'rgba(999, 999, 999, 0.4)',//"#F8F8F8",
                    borderBottomWidth: 1,
                    borderColor: '#eee',
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>

                    <Image source={icon} style={{width: 40, height: 40, marginRight: 10}}/>
                    <Text style={{fontSize: 18, color: 'black', textDecorationLine: 'none'}}>{data.title}</Text>

                </View>
            </TouchableOpacity>

        );
    }
}
export default CheckBox

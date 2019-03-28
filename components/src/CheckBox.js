import React, { Component } from 'react';
import Icon from  'react-native-vector-icons/MaterialIcons';

class CheckBox extends Component {
    render() {
        let data = this.props.data;
        let iconName = data.priority ? 'favorite' : 'favorite-border';//'check-box' : 'check-box-outline-blank';
        let color = this.props.color || '#000';

        return (
            <Icon.Button
                data={data}
                name={iconName}
                backgroundColor='rgba(0,0,0,0)'
                color={color}
                underlayColor='rgba(0,0,0,0)'
                size={20}
                iconStyle={{marginLeft: -10, marginRight: 0}}
                activeOpacity={1}
                borderRadius={5}
                onPress={this.props.onCheckBoxPressed}
            >
            </Icon.Button>
        );
    }
}
export default CheckBox
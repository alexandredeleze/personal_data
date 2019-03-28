import React, {Component} from 'react';
import {View, Text, Dimensions} from 'react-native';
import CheckBox from './CheckBox';
import UtilsRedux from "./UtilsRedux";

class ListViewItem extends Component {
    constructor(props) {
        super(props);
        this._onCheckBoxPressed = this._onCheckBoxPressed.bind(this);
    }


    _onCheckBoxPressed() {
        let data = this.props.data;
        UtilsRedux._updateDataBase(data.title,data.date,data.completed,!data.priority)
    }

    render() {
        let data = this.props.data;
        let color = '#000';//data.completed ? '#C5C8C9' : '#000';
        let textDecorationLine = 'none'; //data.completed ? 'line-through' : 'none';
        return (
            //<TouchableHighlight underlayColor={'#eee'}
            // style={{paddingTop: 6, paddingBottom: 6, backgroundColor: "#F8F8F8", borderBottomWidth:1, borderColor: '#eee'}} {...this.props.sortHandlers}>
            <View style={{width: Dimensions.get('window').width-10, paddingRight: 10, paddingLeft: 10, paddingTop: 10, paddingBottom: 10, backgroundColor: 'rgba(999, 999, 999, 0.4)',//"#F8F8F8",
                borderBottomWidth:1, borderColor: '#eee', flexDirection: 'row', alignItems: 'center'}}>
                <CheckBox data={data} color={color} onCheckBoxPressed={this._onCheckBoxPressed}></CheckBox>
                <Text style={{fontSize:18, color: color, textDecorationLine: textDecorationLine}}>{data.title}</Text>
            </View>
            //</TouchableHighlight>
        )
    }
}

export default ListViewItem

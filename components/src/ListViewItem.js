import React, {Component} from 'react';
import {TouchableHighlight, View, Text, Dimensions} from 'react-native';
import CheckBox from './CheckBox';
import UtilsRedux from "../UtilsRedux";

class ListViewItem extends Component {
    constructor(props) {
        super(props);
        this._onCheckBoxPressed = this._onCheckBoxPressed.bind(this);
        this.state = {
            data: this.props.data
        }
    }

    componentWillReceiveProps(props) {
        this.setState({
            data: props.data
        })
    }
    //TODO I think that hier the hearth doesn't work with the redux (I have had the UtilsRedux just to test the order of the elements in Daily)
    _onCheckBoxPressed() {
        var data = this.state.data;
        //data.completed = !data.completed;
        data.priority = !data.priority;
        this.setState({
            data: data
        });
        UtilsRedux._updateDataBase(data.title,new Date().getDate(),undefined,data.priority)
        this.props.onCompletedChange(data, this.props.dataIndex);
    }

    render() {
        let data = this.state.data;
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

module.exports = ListViewItem;
import React, { Component } from 'react';
import {View, Button, Dimensions, TextInput} from 'react-native';
import TodoModel from './TodoModel';
import Utils from './Utils';
import UtilsRedux from '../UtilsRedux';
import {connect} from "react-redux";

class OmniBox extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        //this.onKeyPress = this.onKeyPress.bind(this);
    }

    componentWillMount() {
        this.setState({
            newValue: ''
        });
    }

    onChange(event){
        var title = String(event.nativeEvent.text);
        var dataList = this.props.data.filter((item) => item.title.match(new RegExp('.*' + title +'.*', 'gi')));

        this.setState({
            newValue: title
        });
        this.props.updateDataList(dataList);
    }

    joinData = () => {
        var newDataItem = new TodoModel(this.state.newValue);
        var dataList = this.props.data;
        //console.log("Datalist", dataList);
        var dataItem = Utils.findTodo(newDataItem, dataList);
        if(!dataItem) {
            UtilsRedux._addToDataBase(newDataItem.title, new Date().getDate(), newDataItem.priority)
            dataList.unshift(newDataItem);
            this.setState({
                newValue: ''
            });
            this.props.updateDataList(dataList);
        }
    }

    render() {
        return (
            <View style={{width: Dimensions.get('window').width-10, flexDirection: 'row', alignItems:'center', marginBottom: 5, marginTop: 5}}>
                <TextInput style={{width: Dimensions.get('window').width*.85, height: 60, padding: 14, fontSize: 16, borderWidth: 1, borderColor: '#eee', borderRadius: 0, backgroundColor: 'rgba(999, 999, 999, 0.8)'}}
                           placeholder='Add a todo or Search'
                           blurOnSubmit={false}
                           value={this.state.newValue}
                           //onKeyPress={this.onKeyPress}
                           onChange={this.onChange}
                           onSubmitEditing={this.onKeyPress}>

                </TextInput>
                <Button
                    style = {{width: Dimensions.get('window').width*.15, height: 60, padding: 14, marginBottom: 0}}
                    disabled ={(this.state.newValue === "")}
                    onPress={this.joinData}
                    title="Add"
                    color="#841584"
                />
            </View>


        );
    }
}
const mapStateToProps = state => {
    return {
        dataBase: state.dataBaseReducer.dataBase
    }
}

export default connect(mapStateToProps)(OmniBox)
//module.exports = OmniBox;


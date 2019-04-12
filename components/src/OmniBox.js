import React, {Component} from 'react';
import {Button, Dimensions, TextInput, View} from 'react-native';
import UtilsRedux from './UtilsRedux';
import Utils from "./Utils";
import  {SearchableDropdown} from 'react-native-searchable-dropdown';

class OmniBox extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {newValue:''}
    }

    onChange(event){
        let title = String(event.nativeEvent.text);
        this.setState({
            newValue: title
        });

    }

    joinData = () => {
        let newDataItem = this.state.newValue.trim();
        let dataList = this.props.data;
        let check = dataList.filter(item => item.title === newDataItem).length === 0;
        if(check) {
            UtilsRedux._addToDataBase(newDataItem, Utils._returnDateXDaysAgo(0), false);
            this.setState({
                newValue: ''
            });
        }
    };


    render() {
        var  items  = [
            {
                id: 1,
                name: 'Javascript'
            },
            {
                id: 2,
                name: 'Java'
            },
            {
                id: 3,
                name: 'Ruby'
            },
            {
                id: 4,
                name: 'React Native'
            },
            {
                id: 5,
                name: 'PHP'
            },
            {
                id: 6,
                name: 'Python'
            },
            {
                id: 7,
                name: 'Go'
            },
            {
                id: 8,
                name: 'Swift'
            },
        ];

        return (
            <View style={{width: Dimensions.get('window').width, flexDirection: 'row', alignItems:'center', marginBottom: 5, marginTop: 5}}>

                <TextInput style={{width: Dimensions.get('window').width*.85, height: 60, padding: 14, fontSize: 16, borderWidth: 1, borderColor: '#eee', borderRadius: 0, backgroundColor: 'rgba(999, 999, 999, 0.8)'}}
                           placeholder='Add a todo or Search'
                           blurOnSubmit={false}
                           value={this.state.newValue}
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

export default OmniBox



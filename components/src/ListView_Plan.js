import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import OmniBox from './OmniBox';
import ListViewItem from './ListViewItem';
import {connect} from "react-redux";
import Utils from "./Utils";
import moment from "moment";
import UtilsRedux from "./UtilsRedux";

class ListView_Plan extends Component {
    _findOldTask() {
        for (var i = 1; i <= 30; ++i) {
            let newList = this.props.dataBase.filter(item => Utils._checkIfDateInRange(item.date, i));
            if (newList.length !== 0) {
                newList.forEach(item => UtilsRedux._addToDataBase(item.title, moment().format("DD-MM-YYYY"), item.priority))
            }
        }
        return [];
    }

    componentDidUpdate() {

        let todayList = this.props.dataBase.filter(item => Utils._checkIfDateInRange(item.date, 0));
        let orderedList = todayList.filter(item => item.priority).concat(todayList.filter(item => !item.priority));
        if (orderedList.length === 0) {
            this._findOldTask();
        }
        return true;
    }

    render() {
        let listView = null;
        let todayList = this.props.dataBase.filter(item => Utils._checkIfDateInRange(item.date, 0));
        let orderedList = todayList.filter(item => item.priority).concat(todayList.filter(item => !item.priority));
        if (orderedList.length) {
            listView = (
                <FlatList
                    ref='listView'
                    style={{flex: 1}}
                    data={orderedList}
                    keyExtractor={item => item.title + item.date}
                    renderItem={dataItem => <ListViewItem data={dataItem.item}/>}
                />
            );
        }

        return (
            <View style={{flex: 1, marginLeft: 10, marginRight: 10}}>
                <OmniBox
                    data={orderedList}/>
                {listView}
            </View>
        )
    }


}

const mapStateToProps = state => {
    return {
        dataBase: state.dataBaseReducer.dataBase
    }
};

export default connect(mapStateToProps)(ListView_Plan)
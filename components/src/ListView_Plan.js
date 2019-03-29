import React, { Component } from 'react';
import {View, FlatList} from 'react-native';
import OmniBox from './OmniBox';
import ListViewItem from './ListViewItem';
import {connect} from "react-redux";

class ListView_Plan extends Component {
    render() {
        let listView = (<View></View>);
        let todayList = this.props.dataBase.filter(item => item.date === new Date().getDate())
        let orderedList = todayList.filter(item => item.priority).concat(this.props.dataBase.filter(item => !item.priority))
        if (orderedList.length) {
            listView = (
                <FlatList
                    ref='listView'
                    style={{flex: 1}}
                    data={orderedList}
                    keyExtractor={item=> item.title}
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
};

const mapStateToProps = state => {
    return {
        dataBase: state.dataBaseReducer.dataBase
    }
}

export default connect(mapStateToProps)(ListView_Plan)
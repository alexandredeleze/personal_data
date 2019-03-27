import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,SwipeableFlatList, ScrollView,Image} from 'react-native';
import Page from "./Page";
import {connect} from "react-redux";
import UtilsRedux from './UtilsRedux'

class Daily extends React.Component {

    constructor(props){
        var date = new Date().getDate()
        super(props)
        this.state={
            leftActionActivated:false,
            toggle:false,
        }
        if(this.props.dataBase.filter(item => item.date === date).length === 0){
            this.props.dataBase.filter(item => item.date = date-1).forEach(value => Utils._addToDataBase(value.value,date))
        }
    }



    _renderQuickActionButton = (item) => {
        return (
            <View style={styles.quickActionContainer}>
                <TouchableOpacity
                    onPress={() => {
                        //this._changeValueForItem(item,false,isHighPriority)
                        UtilsRedux._updateDataBase(item.value,item.date,false)
                    }} style={styles.quickActionButtonStyleRed}>
                    <Image source={require('../resources/ic_not_done.png')}/>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        //this._changeValueForItem(item,true,isHighPriority)

                        UtilsRedux._updateDataBase(item.value,item.date,true)
                    }} style={styles.quickActionButtonStyleGreen}>
                    <Image source={require('../resources/ic_done.png')}/>
                </TouchableOpacity>
            </View>
        )
    };

    _renderListItem = (item) => {
        return(
            <View style={[styles.cardContainer,{backgroundColor:item.activated===undefined?'white':item.activated?'green':'red'}]}>
                <Text>{item.value}</Text>
            </View>
        )
    };

    render() {
        return (
            <Page>
                <View style={styles.highPriority}>
                    <View style={styles.title_container}>
                        <Text style={styles.title}>Tasks of today</Text>
                    </View>
                    <View style={styles.content}>
                        <ScrollView>
                            <SwipeableFlatList data={this.props.dataBase}
                                               bounceFirstRowOnMount={true}
                                               maxSwipeDistance={110}
                                               renderQuickActions={({index,item})=>this._renderQuickActionButton(item)}
                                               renderItem={({index,item})=>this._renderListItem(item)}
                                               keyExtractor={(item,index)=> index.toString()}/>
                        </ScrollView>

                    </View>
                </View>
            </Page>
        );
    }


}

const styles = StyleSheet.create({
    highPriority: {
        flex:1,

    },
    title:{
        fontWeight: 'bold',
        textAlign:'center',
        fontSize: 26,
    },
    content:{
        flex:9,
    },
    title_container:{
        flex:1,
        alignItems:'stretch',
    },
    flatList:{
        backgroundColor:'transparent'
    },
    cardContainer: {
        flex: 1,
        flexDirection: 'row',
        elevation: 5,
        margin: 10,
        shadowRadius: 3,
        shadowOffset: {
            width: 3,
            height: 3
        },
        padding: 20
    },
    quickActionContainer: {
        flex: 1,
        margin:10,
        justifyContent: 'flex-end',
        flexDirection: 'row'
    },
    quickActionButtonStyleRed: {
        alignSelf: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'red',
        padding: 11,
    },
    quickActionButtonStyleGreen: {
        alignSelf: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'green',
        padding: 11,
    },


});

const mapStateToProps = state => {
    return {
        dataBase: state.dataBaseReducer.dataBase
    }
}

export default connect(mapStateToProps)(Daily)
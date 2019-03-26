import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,SwipeableFlatList} from 'react-native';
import Page from "./Page";
import {connect} from "react-redux";
class Daily extends React.Component {

    constructor(props){
        super(props)
        this.state={
            leftActionActivated:false,
            toggle:false,
            activated: this.props.highPriority.map((value, index, array) => undefined).concat(this.props.lowPriority.map(value=>undefined)),
        }
    }


    _addHighPriority(arg) {
        const action = { type: "ADD_HIGH", value: arg }
        this.props.dispatch(action)
    }
    _addLowPriority() {
        const action = { type: "ADD_LOW", value: "" }
        this.props.dispatch(action)
    }
    _removeHighPriority(arg) {
        const action = { type: "REMOVE_HIGH", value: arg }
        this.props.dispatch(action)
    }
    _removeLowPriority() {
        const action = { type: "REMOVE_LOW", value: "" }
        this.props.dispatch(action)
    }


    _renderQuickActionButton = (item,isHighPriority) => {
        return (
            <View style={styles.quickActionContainer}>
                <TouchableOpacity
                    onPress={() => {
                        this._changeValueForItem(item,false,isHighPriority)
                    }} style={styles.quickActionButtonStyleRed}>
                    <Text>
                        Not done
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        this._changeValueForItem(item,true,isHighPriority)
                    }} style={styles.quickActionButtonStyleGreen}>
                    <Text>
                        Done
                    </Text>
                </TouchableOpacity>
            </View>
        )
    };

    _renderListItem = (item,isHighPriority) => {
        const index = isHighPriority?this.props.highPriority.findIndex(item2 => item2=== item):
            this.props.lowPriority.findIndex(item2 => item2=== item) + this.props.highPriority.length
        const bool = this.state.activated[index]
        return (
            <View style={[styles.cardContainer,{backgroundColor:bool===undefined?'white':bool?'green':'red'}]}>
                <Text>{item.value}</Text>
            </View>
        )
    };

    _changeValueForItem(item,newValue,isHighPriority){
        const index = isHighPriority?this.props.highPriority.findIndex(item2 => item2=== item):
            this.props.lowPriority.findIndex(item2 => item2=== item) + this.props.highPriority.length
        this.setState({activated: this.state.activated.map(((value, index2) => {
                if(index2 === index){
                    return newValue
                }
                else{
                    return value
                }
            })) })

    }

    render() {
        return (
            <Page>
                <View style={styles.highPriority}>
                    <View style={styles.title_container}>
                        <Text style={styles.title}>High Priority</Text>
                    </View>
                    <View style={styles.content}>
                        <SwipeableFlatList data={this.props.highPriority}
                                           bounceFirstRowOnMount={true}
                                           maxSwipeDistance={160}
                                           renderQuickActions={({index,item})=>this._renderQuickActionButton(item,true)}
                                           renderItem={({index,item})=>this._renderListItem(item,true)}
                        keyExtractor={(item,index)=> index.toString()}/>

                    </View>
                </View>
                <View style={styles.lowPriority}>
                    <Text style={styles.title}>Low Priority</Text>
                    <View style={styles.content}>
                        <SwipeableFlatList data={this.props.lowPriority}
                                           bounceFirstRowOnMount={true}
                                           maxSwipeDistance={160}
                                           renderQuickActions={({index,item})=>this._renderQuickActionButton(item,false)}
                                           renderItem={({index,item})=>this._renderListItem(item,false)}
                                           keyExtractor={(item,index)=> index.toString()}/>

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
    lowPriority: {
        flex:1,
    },
    title:{
        fontWeight: 'bold',
        textAlign:'center',
        fontSize: 26,
    },
    content:{
        flex:5,
        alignItems:'stretch'
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
        //backgroundColor: 'white',
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
        padding: 20,
    },
    quickActionButtonStyleGreen: {
        alignSelf: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'green',
        padding: 20,
    },


});

const mapStateToProps = state => {
    return {
        lowPriority: state.lowPriorityReducer.lowPriority,
        highPriority: state.highPriorityReducer.highPriority
    }
}

export default connect(mapStateToProps)(Daily)
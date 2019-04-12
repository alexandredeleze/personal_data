import React, {Component} from 'react';
import UtilsRedux from "./UtilsRedux";
import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Swipeable from "react-native-swipeable";
import Colors from "./Colors";

class ListViewItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rightActionActivated: false,
        };
        this._mounted = false;
    }
    /*
<<<<<<< HEAD


    _onCheckBoxPressed() {/*
<<<<<<< HEAD
        var data = this.state.data;
        //data.completed = !data.completed;
        data.priority = !data.priority;
        this.setState({
            data: data
        });
        UtilsRedux._updateDataBase(data.title,new Date().getDate(),undefined, data.priority)
        this.props.onCompletedChange(data, this.props.dataIndex);
=======*/
    _onCheckBoxPressed() {
        let data = this.props.data;
        UtilsRedux._updateDataBase(data.title,data.date,data.completed,!data.priority)
    }

    componentDidMount() {
        this._mounted = true;
    }

    componentWillUnmount() {
        this._mounted = false;
    }

    render() {
        let data = this.props.data;
        let icon = data.priority ? require('../../resources/ic_priority.png') : require('../../resources/ic_priority_not.png');
        return (

            <Swipeable

                rightContent={(
                    <View style={[styles.rightSwipeItem, {backgroundColor: 'red'}]}>
                        {this.state.rightActionActivated ?
                            <Image source={require('../../resources/ic_trash.png')}
                                   style={{width: 20, height: 20, marginRight: 10}}/> :
                            <Text>Delete</Text>}
                    </View>
                )}
                onRightActionActivate={() => {
                    if (this._mounted) this.setState({rightActionActivated: true})
                }}
                onRightActionDeactivate={() => {
                    if (this._mounted) this.setState({rightActionActivated: false})
                }}
                onRightActionComplete={() => UtilsRedux._removeDataBase(data.title, data.date)}
            >
                <TouchableOpacity onPress={() => this._onCheckBoxPressed()}>
                    <View style={{
                        width: Dimensions.get('window').width - 10,
                        paddingRight: 10,
                        paddingLeft: 10,
                        paddingTop: 10,
                        paddingBottom: 10,
                        backgroundColor: Colors.gray,//"#F8F8F8",
                        borderBottomWidth: 1,
                        borderColor: '#eee',
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>

                        <Image source={icon} style={{width: 40, height: 40, marginRight: 10}}/>
                        <Text style={{
                            fontSize: 18,
                            textDecorationLine: 'none'
                        }}>{data.title}</Text>

                    </View>
                </TouchableOpacity>
            </Swipeable>




        )
    }
}

const styles = StyleSheet.create({
    rightSwipeItem: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        margin: 5,
        padding: 20
    },
    cardContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 5,
        backgroundColor: 'rgba(999, 999, 999, 0.4)',//"#F8F8F8",
        borderBottomWidth: 1,
        borderColor: '#eee',
        padding: 10
    },
});

export default ListViewItem

import React from 'react';
import {FlatList, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import Page from "./Page";
import {connect} from "react-redux";
import Swipeable from 'react-native-swipeable';
import UtilsRedux from './src/UtilsRedux'
import Utils from "./src/Utils";

class Daily extends React.Component {

    constructor(props){
        super(props);
        this.state={
            leftActionActivated:false,
            rightActionActivated: false,
        };

    }

    _orderedElements(){
        let firstOrder = this.props.dataBase.filter(item => Utils._checkIfDateInRange(item.date, 0));
        return firstOrder.filter(item => item.priority === true).concat(firstOrder.filter(item => item.priority === false))
    }

    _renderItem = (item) => {
        let {leftActionActivated, rightActionActivated} = this.state;
        let data = item.item;
        let icon = data.priority ? require('../resources/ic_priority.png') : require('../resources/ic_priority_not.png');
        return(
            <Swipeable
                leftActionActivationDistance={200}
                leftContent={(
                    <View style={[styles.leftSwipeItem, {backgroundColor: 'green'}]}>
                        {leftActionActivated ?
                            <Image source={require('../resources/ic_done.png')}/> :
                            <Text>keep pulling!</Text>}
                    </View>
                )}
                rightContent={(
                    <View style={[styles.rightSwipeItem, {backgroundColor: 'red'}]}>
                        {rightActionActivated ?
                            <Image source={require('../resources/ic_not_done.png')}/> :
                            <Text>keep pulling!</Text>}
                    </View>
                )}
                onLeftActionActivate={() => this.setState({leftActionActivated: true})}
                onLeftActionDeactivate={() => this.setState({leftActionActivated: false})}
                onLeftActionComplete={() => UtilsRedux._updateDataBase(data.title, data.date, true, data.priority)}
                onRightActionActivate={() => this.setState({rightActionActivated: true})}
                onRightActionDeactivate={() => this.setState({rightActionActivated: false})}
                onRightActionComplete={() => UtilsRedux._updateDataBase(data.title, data.date, false, data.priority)}
            >
                <View
                    style={[styles.cardContainer, {backgroundColor: data.completed === undefined ? 'white' : data.completed ? 'green' : 'red'}]}>
                    <Image source={icon} style={{width: 40, height: 40, marginRight: 10}}/>
                    <Text style={{
                        fontSize: 18,
                        color: data.completed === undefined ? 'black' : 'white',
                        textDecorationLine: 'none'
                    }}>{data.title}</Text>
                </View>
            </Swipeable>);
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
                            <FlatList data={this._orderedElements()}
                                      renderItem={this._renderItem}
                                      keyExtractor={(item, index) => index.toString()}/>
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
        alignItems: 'center',
        elevation: 5,
        margin: 5,
        shadowRadius: 3,
        shadowOffset: {
            width: 3,
            height: 3
        },
        padding: 10
    },
    quickActionContainer: {
        flex: 1,
        margin: 5,
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

    leftSwipeItem: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        margin: 5,
        paddingRight: 20
    },

    rightSwipeItem: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        margin: 5,
        paddingLeft: 20
    }

});

const mapStateToProps = state => {
    return {
        dataBase: state.dataBaseReducer.dataBase
    }
};

export default connect(mapStateToProps)(Daily)
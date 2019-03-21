import React from 'react';
import { StyleSheet, Text, View, FlatList,TouchableHighlight, Animated, TouchableOpacity, ListView } from 'react-native';
import Page from "./Page";
import {connect} from "react-redux";
import {SwipeableFlatList} from 'react-native-swipeable-flat-list';
class Daily extends React.Component {

    constructor(props){
        super(props)
        this.state={
            leftActionActivated:false,
            toggle:false,
            activated: this.props.highPriority.map((value, index, array) => false),
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

    render() {
        return (
            <Page>
                <View style={styles.highPriority}>
                    <View style={styles.title_container}>
                        <Text style={styles.title}>High Priority</Text>
                    </View>
                    <View style={styles.content}>
                        <SwipeableFlatList
                            data={this.props.highPriority}
                            renderItem={({ item }) => (
                                <Text style={{ height: 48, textAlign: 'center', backgroundColor:'transparent' }}>{item.value}</Text>
                            )}
                            renderLeft={({ item }) => (
                                <Text style={{ width: 150, backgroundColor:'green' }}>Left</Text>
                            )}
                            renderRight={({ item }) => (
                                <Text style={{ width: 150, backgroundColor: 'red' }}>Right</Text>
                            )}
                            keyExtractor={(item)=>item.toString()}
                            style={styles.flatList}
                            itemBackgroundColor={'gray'}

                        />

                    </View>
                </View>
                <View style={styles.lowPriority}>
                    <Text style={styles.title}>Low Priority</Text>
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
    }


});

const mapStateToProps = state => {
    return {
        lowPriority: state.lowPriorityReducer.lowPriority,
        highPriority: state.highPriorityReducer.highPriority
    }
}

export default connect(mapStateToProps)(Daily)
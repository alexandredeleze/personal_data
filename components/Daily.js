import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Page from "./Page";
import {connect} from "react-redux";

class Daily extends React.Component {
    _addHighPriority(arg) {
        const action = { type: "ADD_HIGH", value: arg }
        this.props.dispatch(action)
    }
    _addLowPriority() {
        const action = { type: "ADD_LOW", value: "" }
        this.props.dispatch(action)
    }
    _removeHighPriority() {
        const action = { type: "REMOVE_HIGH", value: "" }
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
                    <Text style={styles.title}>High Priority</Text>
                    <FlatList
                        style={styles.list}
                    data={this.props.highPriority}
                    keyExtractor={(item) => item.toString()}
                    renderItem={({item}) => (
                        <Text>{item}</Text>
                    )}
                    />
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
        alignItems: 'stretch',
    },
    lowPriority: {
        flex:1,
    },
    title:{
        fontWeight: 'bold',
        textAlign:'center',
        fontSize: 26,
    },
    list:{
        flex:1,

    }
});

const mapStateToProps = state => {
    return {
        lowPriority: state.lowPriorityReducer.lowPriority,
        highPriority: state.highPriorityReducer.highPriority
    }
}

export default connect(mapStateToProps)(Daily)
import React from 'react';
import { StyleSheet, Text} from 'react-native';
import Page from "./Page";
import {connect} from "react-redux";

class Analysis extends React.Component {
    _addHighPriority() {
        const action = { type: "ADD_HIGH", value: "" }
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
                <Text>Hello from Analysis!</Text>
            </Page>
        );
    }
}

const styles = StyleSheet.create({

});

const mapStateToProps = state => {
    return {
        lowPriority: state.lowPriorityReducer.lowPriority,
        highPriority: state.highPriorityReducer.highPriority
    }
}

export default connect(mapStateToProps)(Analysis)
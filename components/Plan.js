import React from 'react';
import { StyleSheet, Text} from 'react-native';
import { connect } from 'react-redux'
import Page from "./Page";

class Plan extends React.Component {
    _addHighPriority(arg) {
        const action = { type: "ADD_HIGH", value: arg }
        this.props.dispatch(action)
    }
    _addLowPriority(arg) {
        const action = { type: "ADD_LOW", value: arg}
        this.props.dispatch(action)
    }
    _removeHighPriority() {
        const action = { type: "REMOVE_HIGH", value: "Breakfast" }
        this.props.dispatch(action)
    }
    _removeLowPriority() {
        const action = { type: "REMOVE_LOW", value: "" }
        this.props.dispatch(action)
    }
    render() {
        return (
            <Page>
                <Text>Hello from Plan!</Text>
            </Page>
        );
    }
    componentDidMount() {
        this._addHighPriority("Breakfast")
        this._addHighPriority("Clean Teeth")
        this._addLowPriority("Yoga")
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

export default connect(mapStateToProps)(Plan)
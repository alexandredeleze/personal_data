import React from 'react';
import { StyleSheet, Text} from 'react-native';
import { connect } from 'react-redux'
import Page from "./Page";

class Plan extends React.Component {
    _addElement(element){
        var current_date = new Date().getDate()
        const action = { type: "ADD_ELEMENT", value: element, date: current_date}
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
        this._addElement("Breakfast")
        this._addElement("Clean Teeth")
        this._addElement("Shower")
        this._addElement("Make the bed")
        this._addElement("Close the door")
    }
}

const styles = StyleSheet.create({

});

const mapStateToProps = state => {
    return {
        dataBase: state.dataBaseReducer.dataBase
    }
}

export default connect(mapStateToProps)(Plan)
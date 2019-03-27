import React from 'react';

import { StyleSheet} from 'react-native';
import { connect } from 'react-redux'
import Page from "./Page";
import ListView from './src/ListView';

class Plan extends React.Component {
    _addElement(element){
        var current_date = new Date().getDate()
        const action = { type: "ADD_ELEMENT", value: element, date: current_date}
        this.props.dispatch(action)
    }

    render() {
        return (
            <Page >
                <ListView></ListView>
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
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 30,
        paddingBottom: 10,
        paddingLeft: 2,
        paddingRight: 2,
        backgroundColor: 'rgba(100, 100, 100, 0.4)'
    }

});

const mapStateToProps = state => {
    return {
        dataBase: state.dataBaseReducer.dataBase
    }
}

export default connect(mapStateToProps)(Plan)
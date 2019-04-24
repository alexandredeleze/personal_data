import React, {Component} from 'react';
import {Button, Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import OmniBox from './OmniBox';
import ListViewItem from './ListViewItem';
import {connect} from "react-redux";
import Utils from "./Utils";
import moment from "moment";
import UtilsRedux from "./UtilsRedux";
import Colors from "./Colors";


class ListView_Plan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: false,
        };
        this._beginInput = this._beginInput.bind(this);
        this._endInput = this._endInput.bind(this);
        this._addElement = this._addElement.bind(this);

        this.example_tasks = ["Yoga", "Read the newspaper", "Walk the dog", "Morning Run", "Pick up laundry"];
    }

    _findOldTask() {
        for (var i = 1; i <= 30; ++i) {
            let newList = this.props.dataBase.filter(item => Utils._checkIfDateInRange(item.date, i));
            if (newList.length !== 0) {
                newList.forEach(item => UtilsRedux._addToDataBase(item.title, moment().format("DD-MM-YYYY"), item.priority));
                break;
            }
        }
        return [];
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let todayList = this.props.dataBase.filter(item => Utils._checkIfDateInRange(item.date, 0));
        let orderedList = todayList.filter(item => item.priority).concat(todayList.filter(item => !item.priority));
        if (orderedList.length === 0 && prevProps.dataBase.filter(item => Utils._checkIfDateInRange(item.date, 0)).length === 0) {
            this._findOldTask();
        }
        return true;
    }

    _beginInput() {
        this.setState({inputText: true});
    }

    _endInput(element) {
        this.example_tasks = this.example_tasks.filter(item => item !== element);
        this.setState({inputText: false})
    }

    _addElement = (element) => (
        this.example_tasks = [
            ...this.example_tasks.filter(item => item !== element),
            element
        ]
    );

    _renderAdvice = ({item}) => (
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
            <TouchableOpacity onPress={() => this._itemSelected(item)}>
                <Text style={{
                    fontSize: 18,
                    textDecorationLine: 'none'
                }}>{item}</Text>
            </TouchableOpacity>

        </View>
    );


    _itemSelected(item) {
        this.example_tasks = this.example_tasks.filter(element => element !== item);
        UtilsRedux._addToDataBase(item, Utils._returnDateXDaysAgo(0), false);
        this._endInput();


    }

    render() {
        let listView = null;
        let todayList = this.props.dataBase.filter(item => Utils._checkIfDateInRange(item.date, 0));
        let orderedList = todayList.filter(item => item.priority).concat(todayList.filter(item => !item.priority));
        if (orderedList.length && !this.state.inputText) {
            listView = (
                <FlatList
                    ref='listView'
                    style={{flex: 1}}
                    data={orderedList}
                    keyExtractor={item => item.title + item.date}
                    renderItem={dataItem => <ListViewItem data={dataItem.item} onDelete={this._addElement}/>}
                />

            );
        }
        if (this.state.inputText) {
            listView = (
                <View style={styles.proposition}>
                    <View style={styles.button}>
                        <Button onPress={() => this.setState({inputText: false})} title={'return'}/>
                    </View>
                    <View style={styles.title_container}>
                        <Text style={styles.title}>Propositions</Text>
                    </View>
                    <View style={styles.content}>

                        <FlatList
                            ref='listView'
                            style={{flex: 1}}
                            data={this.example_tasks}
                            keyExtractor={item => item}
                            renderItem={this._renderAdvice}
                        />
                    </View>


                </View>

            );
        }

        return (
            <View style={{flex: 1, marginLeft: 10, marginRight: 10}}>
                <OmniBox
                    data={orderedList}
                    beginInput={this._beginInput}
                    endInput={this._endInput}/>
                {listView}
            </View>
        )
    }


}

const mapStateToProps = state => {
    return {
        dataBase: state.dataBaseReducer.dataBase
    }
};

const styles = StyleSheet.create({
    proposition: {
        flex: 1,
        justifyContent: 'flex-start'
    },
    title_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 26,
    },
    content: {
        flex: 10,
    },
    button: {
        flex: 1,
    }
});

export default connect(mapStateToProps)(ListView_Plan)
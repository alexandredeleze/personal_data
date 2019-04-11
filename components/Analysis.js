import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Page from "./Page";
import {connect} from "react-redux";
import Utils from "./src/Utils";
import UtilsRedux from "./src/UtilsRedux";
import AnalysisButton from "./src/AnalysisButton";
import BarChart from "./src/BarChart";
import BarChart2 from "./src/BarChart2";
import CircleChart from "./src/CircleChart";
import Square from "./src/Square";
import Colors from "./src/Colors"


class Analysis extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weekly: true,
        };
        this._isWeekly = this._isWeekly.bind(this);
    }

    componentDidMount() {
        UtilsRedux._addToDataBase("Breakfast", Utils._returnDateXDaysAgo(1), true);
        UtilsRedux._addToDataBase("Clean teeth", Utils._returnDateXDaysAgo(1), true);
        UtilsRedux._addToDataBase("Breakfast", Utils._returnDateXDaysAgo(2), true);
        UtilsRedux._addToDataBase("Breakfast", Utils._returnDateXDaysAgo(3), true);
        UtilsRedux._addToDataBase("Breakfast", Utils._returnDateXDaysAgo(27), false);

        UtilsRedux._updateDataBase("Breakfast", Utils._returnDateXDaysAgo(1), true, true);
        UtilsRedux._updateDataBase("Clean teeth", Utils._returnDateXDaysAgo(1), true, true);
        UtilsRedux._updateDataBase("Breakfast", Utils._returnDateXDaysAgo(2), true, true);
        UtilsRedux._updateDataBase("Breakfast", Utils._returnDateXDaysAgo(3), false, true);
        UtilsRedux._updateDataBase("Breakfast", Utils._returnDateXDaysAgo(27), true, false);

    }

    _isWeekly(arg) {
        this.setState({weekly: arg})
    }

    render() {
        let text = 'Number of tasks per ' + (this.state.weekly ? 'day' : 'week');
        return (
            <Page>
                <CircleChart data={this.props.dataBase} weekly={this.state.weekly}/>
                <View style={styles.bar_chart_container}>
                    <Text style={styles.title}>{text}</Text>
                    <BarChart data={this.props.dataBase} weekly={this.state.weekly}/>
                    {/*<BarChart2 data={this.props.dataBase} weekly={this.state.weekly}/>*/}
                    <View style={styles.legend}>
                        <Square color={Colors.green}/>
                        <Text>Priority & Done</Text>
                        <Square color={Colors.yellow}/>
                        <Text>Not Priority & Done</Text>
                        <Square color={Colors.red}/>
                        <Text>Not done</Text>
                    </View>
                </View>

                <AnalysisButton function={this._isWeekly} weekly={this.state.weekly}/>
            </Page>

        );
    }
}

const styles = StyleSheet.create({
    container_circle: {
        flex: 5,
        flexDirection: 'row',
    },
    bar_chart_container: {
        flex: 9,
        alignContent: 'center',
        padding: 10,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    legend: {
        padding: 10,
        marginTop: 5,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center'
    }
});

const mapStateToProps = state => {
    return {
        dataBase: state.dataBaseReducer.dataBase
    }
};

export default connect(mapStateToProps)(Analysis)
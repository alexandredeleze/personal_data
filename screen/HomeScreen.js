import {Alert, Button, Text, TouchableHighlight, View} from "react-native";

import React, {Component} from 'react';
import {styles} from '../styles/styles'
import {Footer} from "../component/Footer";
import CheckBox from "react-native-check-box";

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wakeup: false,
            clean_teeth: false,
            breakfast: false,
        };
    }

    static navigationOptions = {
        title: 'Morning routine',
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.title}>Welcome back {this.props.navigation.getParam('name', 'Serge')}!</Text>
                    <Text style={styles.standard_text}>Checklist of today:</Text>
                    <CheckBox
                        style={styles.checkbox}
                        isChecked={this.state.wakeup}
                        onClick={() => this.setState({wakeup: !this.state.wakeup})}
                        rightText={'Wake up'}/>
                    <CheckBox
                        style={styles.checkbox}
                        isChecked={this.state.clean_teeth}
                        onClick={() => this.setState({clean_teeth: !this.state.clean_teeth})}
                        rightText={'Clean your teeth'}/>
                    <CheckBox
                        style={styles.checkbox}
                        isChecked={this.state.breakfast}
                        onClick={() => this.setState({breakfast: !this.state.breakfast})}
                        rightText={'Breakfast'}/>
                    <TouchableHighlight style={styles.submit}>
                        <Button title={'Submit'} onPress={() => Alert.alert('Saved')}/>
                    </TouchableHighlight>
                    <Text style={styles.standard_text}>Sleeping time: 8h</Text>
                    <Text style={styles.standard_text}>Time for morning routine: 30 min</Text>
                    <TouchableHighlight style={styles.submit}>
                        <Button title={'Advices'}
                                onPress={() => Alert.alert('Advices for you', 'In average go 30 minutes before to bed')}/>
                    </TouchableHighlight>

                </View>

                <Footer navigation={this.props.navigation}/>
            </View>
        );
    }
}

export {HomeScreen};
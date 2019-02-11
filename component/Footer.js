import React, {Component} from 'react';
import {Button, View} from 'react-native';
import {styles} from "../styles/styles";

class Footer extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={styles.footer}>
                <View style={styles.footer_button}>
                    <Button title={'Home'} onPress={()=>this.props.navigation.replace('Home')}/>
                </View>
                <View style={styles.footer_button}>
                    <Button title={'Chart'} onPress={() => this.props.navigation.replace('Sleep')}/>
                </View>
                <View style={styles.footer_button}>
                    <Button title={'Settings'} onPress={()=>this.props.navigation.replace('Settings')}/>
                </View>
            </View>
        );
    }
}
export {Footer}
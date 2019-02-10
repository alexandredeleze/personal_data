import React, { Component } from 'react';
import {Text, View,Button } from 'react-native';
import {styles} from "../styles/styles";
class Footer extends Component{
    constructor(props){
        super(props);
    }
    render(): React.ReactNode {
        return (
            <View style={styles.footer}>
                <View style={styles.footer_button}>
                    <Button title={'Home'} onPress={()=>this.props.navigation.replace('Home')}/>
                </View>
                <View style={styles.footer_button}>
                    <Button title={'Chart'} onPress={()=>this.props.navigation.replace('Chart')}/>
                </View>
                <View style={styles.footer_button}>
                    <Button title={'Settings'} onPress={()=>this.props.navigation.replace('Settings')}/>
                </View>
            </View>
        );
    }
}
export {Footer}
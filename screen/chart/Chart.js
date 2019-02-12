import {Button, Text, View, Image, AppRegistry} from "react-native";
import React, {Component} from 'react';
import {styles} from '../../styles/styles'
import {Footer} from "../../component/Footer";

class InsertImage extends Component {
    constructor(props) {
        super(props);
        this.images = {
            'sleep': require('../../resources/Sleep.png'),
            'tasks': require('../../resources/Sleep.png'),
            'synthesis': require('../../resources/Sleep.png'),
            'time_to_leave': require('../../resources/Sleep.png'),
        }
        this.state = {
            actualImage: this.images[this.props.image],
        }
    }

    render() {
        return (
            <Image
                style={{flex: 1, height: undefined, width: undefined}}
                source={this.state.actualImage}
                resizeMode="contain"
            />

        );
    }
}

class Chart extends Component {

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.content}>
                    <InsertImage image={this.props.image}/>
                </View>
                <View style={styles.footer}>
                    <View style={styles.footer_button}>
                        <Button title={'Sleep'} onPress={() => this.props.navigation.replace('Sleep')}/>
                    </View>
                    <View style={styles.footer_button}>
                        <Button title={'Tasks'} onPress={() => this.props.navigation.replace('Tasks')}/>
                    </View>
                    <View style={styles.footer_button}>
                        <Button title={'Time to leave'} onPress={() => this.props.navigation.replace('TimeToLeave')}/>
                    </View>
                    <View style={styles.footer_button}>
                        <Button title={'Synthesis'} onPress={() => this.props.navigation.replace('Synthesis')}/>
                    </View>
                </View>
                <Footer navigation={this.props.navigation}/>
            </View>
        );
    }
}

export {Chart};
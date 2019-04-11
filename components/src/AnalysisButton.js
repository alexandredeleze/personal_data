import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

class AnalysisButton extends React.Component {
    render() {
        return (
            <View style={styles.buttons_container}>
                <TouchableOpacity style={[styles.button,{backgroundColor: this.props.weekly?'rgba(202,202,202,0.8)':'white'}]} onPress={() => this.props.function(true)}>
                    <Text>Week</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button,{backgroundColor: !this.props.weekly?'rgba(202,202,202,0.8)':'white'}]} onPress={() => this.props.function(false)}>
                    <Text>Month</Text>
                </TouchableOpacity>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    buttons_container: {
        height: 40,
        flexDirection: 'row',

    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 10,
    }
});

export default AnalysisButton;
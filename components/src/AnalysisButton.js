import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

class AnalysisButton extends React.Component {
    render() {
        return (
            <View style={styles.buttons_container}>
                <TouchableOpacity style={styles.button} onPress={() => this.props.function(true)}>
                    <Text>Week</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => this.props.function(false)}>
                    <Text>Month</Text>
                </TouchableOpacity>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    buttons_container: {
        height: 30,
        flexDirection: 'row',

    },
    button: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 10,
    }
});

export default AnalysisButton;
import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {AnimatedCircularProgress} from "react-native-circular-progress";

class Circle extends React.Component {
    render() {
        return (
            <View style={styles.container_circle_element}>
                <AnimatedCircularProgress
                    size={120}
                    width={15}
                    fill={this.props.percentage}
                    tintColor="#00e0ff"
                    backgroundColor="#3d5875">
                    {
                        () => <View>
                            <Text>{this.props.text}</Text>
                            <Text>{this.props.percentage}%</Text>
                        </View>

                    }

                </AnimatedCircularProgress>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container_circle_element: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Circle;
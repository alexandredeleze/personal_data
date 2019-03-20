import React from 'react';
import { StyleSheet, View,SafeAreaView,ImageBackground } from 'react-native';

export default class Page extends React.Component {
    render() {
        return (
            <SafeAreaView>
                <ImageBackground source={require("../resources/background.png")} style={styles.imageBackground}>
                    <View style={styles.container}>
                        {this.props.children}
                    </View>
                </ImageBackground>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageBackground:{
        width:'100%',
        height:'100%',
    },
});
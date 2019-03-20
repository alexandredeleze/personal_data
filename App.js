import React from 'react';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
        <ImageBackground source={require("./resources/background.png")} style={{width: '100%', height: '100%'}}>
          <View style={styles.container}>
            <Text>Open up App.js to start working on your app h!</Text>
          </View>
        </ImageBackground>
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
});

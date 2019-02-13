import {Button, Text, View} from "react-native";
import React, {Component} from 'react';
import {styles} from '../styles/styles'
import {Footer} from "../component/Footer";
import Dialog from "react-native-dialog";

class Element extends Component {
    constructor(props) {
        super(props);
        this.state = {
            attribute: this.props.name,
            title: this.props.title,
            isDialogVisible: false,
            tmp: '',
            text: this.props.text,
        };
    }

    render() {
        return (
            <View style={styles.account_element}>
                <Text style={styles.account_text}>{this.state.title}: {this.state.attribute} {this.state.text}</Text>
                <Button style={styles.account_button}
                        onPress={() => {
                            this.setState({isDialogVisible: true})
                        }}
                        title={'Edit'}/>
                <Dialog.Container visible={this.state.isDialogVisible}>
                    <Dialog.Title>Change {this.state.title}</Dialog.Title>
                    <Dialog.Description>
                        What is your {this.state.title}?
                    </Dialog.Description>
                    <Dialog.Input label={this.state.title}
                                  onChangeText={(user: string) => this.setState({tmp: user})}>

                    </Dialog.Input>
                    <Dialog.Button label="Cancel"
                                   onPress={() => {
                                       this.setState({
                                           tmp: '',
                                           isDialogVisible: false,
                                       })
                                   }}/>
                    <Dialog.Button label="Sumbit"
                                   onPress={() => {
                                       this.setState({
                                           attribute: this.state.tmp,
                                           tmp: '',
                                           isDialogVisible: false,
                                       })
                                   }}/>
                </Dialog.Container>
            </View>
        );
    }
}

class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            connected: false,
            name: '',
            age: '0',
            isDialogGeneralVisible: false,
            tmpName: '',
            tmpAge: '',
        }
    }

    render() {
        if (!this.state.connected) {
            return (
                <View>
                    <Button style={styles.submit}
                            title={'Connect to an account'}
                            onPress={() => {
                                this.setState({isDialogGeneralVisible: true})
                            }


                            }/>
                    <Dialog.Container visible={this.state.isDialogGeneralVisible}>
                        <Dialog.Title>Registration</Dialog.Title>
                        <Dialog.Description>
                            We don't know you yet
                        </Dialog.Description>
                        <Dialog.Input label="Name"
                                      onChangeText={(nameUser: string) => this.setState({tmpName: nameUser})}>

                        </Dialog.Input>
                        <Dialog.Input label="Age"
                                      onChangeText={(ageUser: string) => this.setState({tmpAge: ageUser})}>

                        </Dialog.Input>
                        <Dialog.Button label="Cancel"
                                       onPress={() => {
                                           this.setState({
                                               tmpName: '',
                                               tmpAge: '',
                                               isDialogGeneralVisible: false,
                                           })
                                       }}/>
                        <Dialog.Button label="Sumbit"
                                       onPress={() => {
                                           this.setState({
                                               name: this.state.tmpName,
                                               age: this.state.tmpAge,
                                               tmpName: '',
                                               tmpAge: '',
                                               connected: true,
                                               isDialogGeneralVisible: false,
                                           })
                                       }}/>
                    </Dialog.Container>
                </View>

            );
        } else {
            return (
                <View style={styles.account}>
                    <Element title={'Name'} name={this.state.name}/>
                    <Element title={'Age'} name={this.state.age} text={'years old'}/>
                </View>


            );
        }

    }
}


class Settings extends Component {
    static navigationOptions = {
        title: 'Settings',
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <Account/>
                </View>
                <Footer navigation={this.props.navigation}/>
            </View>
        );
    }
}

export {Settings};
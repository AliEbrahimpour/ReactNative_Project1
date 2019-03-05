import React, {Component} from 'react';
import {
    Platform,
    Text,
    View,
    Image,
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableOpacity,
    TouchableHighlight,
    TouchableNativeFeedback
} from 'react-native';
import styles from '../assets/css/login_css';
import LinearGradient from "react-native-linear-gradient";


export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            colorLoginButtonHText: {
                color: 'white'
            }
        }
    }

    _login() {
        console.log('ok')
    }

    render() {
        return (
            <View style={styles.container}>
                <LinearGradient colors={['#3181e5', '#594dc2']} style={styles.main}>
                    <View style={styles.loginBox}>
                        <Text style={styles.loginTitle}>ورود</Text>
                        <View style={styles.inputGroups}>
                            <Text style={styles.labelText}>ایمیل :‌ </Text>
                            <TextInput
                                style={styles.inputText}
                                underlineColorAndroid="transparent"
                                placeholder="لطفا ایمیل خود را وارد کنید"
                            />
                        </View>
                        <View style={styles.inputGroups}>
                            <Text style={styles.labelText}>پسورد :‌ </Text>
                            <TextInput
                                style={styles.inputText}
                                underlineColorAndroid="transparent"
                                secureTextEntry={true}
                                placeholder="لطفا پسورد خود را وارد کنید"
                            />
                        </View>
                        <TouchableOpacity activeOpacity={.8}>
                            <Text style={styles.loginButton}>ورود به اپلیکیشن</Text>
                        </TouchableOpacity>
                        <TouchableHighlight
                            onPress={this._login}
                            style={styles.loginButtonH}
                            underlayColor={"yellow"}
                            onShowUnderlay={() => this.setState({
                                colorLoginButtonHText: {
                                    color: 'black'
                                }
                            })}
                            onHideUnderlay={() => this.setState({
                                colorLoginButtonHText: {
                                    color: 'white'
                                }
                            })}>
                            <Text style={[styles.loginButtonHText, this.state.colorLoginButtonHText]}>ورود به
                                اپلیکیشن</Text>
                        </TouchableHighlight>
                        <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('rgba(0,0,0,1)')}>
                            <View style={styles.loginButtonH}>
                                <Text style={[styles.loginButtonHText, this.state.colorLoginButtonHText]}>ورود به اپلیکیشن</Text>
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableOpacity>
                            <Text style={styles.forgetPassword}>فراموشی رمز عبور</Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>

            </View>
        )
    }
}

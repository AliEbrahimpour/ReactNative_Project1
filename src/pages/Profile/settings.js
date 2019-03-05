import React from 'react';
import {Text, View} from "react-native";


export default class Settings extends React.Component {
    render() {
        return (
            <View style={{ flex : 1  , backgroundColor : '#c0392b' , justifyContent : 'center' , alignItems : 'center'}}>
                <Text>Settings Page</Text>
            </View>
        )
    }
}


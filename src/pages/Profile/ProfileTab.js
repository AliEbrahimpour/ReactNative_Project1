import React from 'react';
import {createAppContainer, createMaterialTopTabNavigator} from "react-navigation";
import {Text, View} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

class Tab1 extends React.Component {
    render() {
        return (
            <View style={{ flex : 1 , backgroundColor : 'yellow'}}>
                <Text>Tab 1</Text>
            </View>
        )
    }
}


class Tab2 extends React.Component {
    render() {
        return (
            <View style={{ flex : 1 , backgroundColor : 'red'}}>
                <Text>Tab 2</Text>
            </View>
        )
    }
}

class Tab3 extends React.Component {
    render() {
        return (
            <View style={{ flex : 1 , backgroundColor : 'black'}}>
                <Text>Tab 3</Text>
            </View>
        )
    }
}

class Tab4 extends React.Component {
    render() {
        return (
            <View style={{ flex : 1 , backgroundColor : 'blue'}}>
                <Text>Tab 4</Text>
            </View>
        )
    }
}


const App =createMaterialTopTabNavigator({
    Tab1 : {
        screen : Tab1,
        navigationOptions : {
            tabBarIcon : ({ tintColor }) => <Icon name="md-heart" size={30} color={tintColor} />
        }
    },
    Tab2 : {
        screen : Tab2,
        navigationOptions : {
            tabBarIcon : ({ tintColor }) => <Icon name="md-heart" size={30} color={tintColor} />
        }
    },
    Tab3 : {
        screen : Tab3,
        navigationOptions : {
            tabBarIcon : ({ tintColor }) => <Icon name="md-add-circle" size={30} color={tintColor} />
        }
    },
    Tab4: {
        screen : Tab4,
        navigationOptions : {
            tabBarIcon : ({ tintColor }) => <Icon name="md-search" size={30} color={tintColor} />
        }
    }
},{
    tabBarOptions : {
        activeTintColor : 'rgba(0,0,0,1)',
        inactiveTintColor : 'rgba(0,0,0,.3)'
    },
    swipeEnabled : false,
    animationEnabled : false
});

export default createAppContainer(App);
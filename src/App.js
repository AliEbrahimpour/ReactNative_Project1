import React from 'React';
import {
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator,

} from 'react-navigation';
import {I18nManager, Image} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
I18nManager.forceRTL(true);
import Home from './pages/Home';
import Article from './pages/Article'
import ProfileStack from "./pages/Profile";
import Follow from "./pages/Follow";
import Camera from "./pages/Camera";
import Search from "./pages/Search";
import HomeUser from "./pages/HomeUser";
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './assets/style';


EStyleSheet.build({
    $colorDark : '#333'
});



// const RootStack = createStackNavigator({
// 	Home : {screen : Home},
// 	Article : {screen : Article},
// });

// const App = createAppContainer(RootStack);

const TabNavigator = createBottomTabNavigator({
    Profile: {
        screen: ProfileStack,
        navigationOptions: {
            tabBarIcon: <Image source={require('./assets/images/bg.png')} style={styles.tabNavigatorProfileIcon}/>
        }
    },
    Follow: {
        screen: Follow,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => <Icon name="md-heart" size={30} color={tintColor}/>
        }
    },
    Camera: {
        screen: Camera,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => <Icon name="md-add-circle" size={30} color={tintColor}/>
        }
    },
    Search: {
        screen: Search,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => <Icon name="md-search" size={30} color={tintColor}/>
        }
    },
    HomeUser: {
        screen: HomeUser,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => <Icon name="md-home" size={30} color={tintColor}/>
        }
    }
}, {
    tabBarOptions: {
        showLabel: false,
        activeTintColor: 'rgba(0,0,0,1)',
        inactiveTintColor: 'rgba(0,0,0,.3)'
    },
});

export default createAppContainer(TabNavigator);
// export default App ;
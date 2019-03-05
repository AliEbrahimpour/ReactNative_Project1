import {createStackNavigator, createAppContainer} from 'react-navigation';
import Profile from "./profile";
import Settings from "./settings";
import Archive from "./Archive";




const ProfileStack = createStackNavigator({
    Profile:{
        screen:Profile
    },
    Settings:{
        screen:Settings
    },
    Archive:{
        screen:Archive
    },
});

export default createAppContainer(ProfileStack);

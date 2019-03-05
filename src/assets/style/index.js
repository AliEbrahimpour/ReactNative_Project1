import { Platform } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default styles = EStyleSheet.create({
    tabNavigatorProfileIcon : {
        width : 26 ,
        height : 26 ,
        borderRadius: 13 ,
        borderWidth : 1 ,
        borderColor : '$colorDark'
    },
    headerTitleStyle : {
        '@media ios':{
            fontFamily : 'IRANSansMobile_Bold',
        },
        '@media andriod':{
            fontFamily : 'IRANSansMobile',
            fontWeight : "bold"
        },

        fontSize : 18,
        color : '#333',
        margin : 10
    }
})
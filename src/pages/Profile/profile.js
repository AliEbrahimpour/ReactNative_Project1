import React from 'react';
import {Text, View,TouchableOpacity,Image} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import EStyleSheet from "react-native-extended-stylesheet";
import TabProfileView from './ProfileTab';


export default class Profile extends React.Component {
    static navigationOptions = ({navigation}) => ({
        headerLeft: <Text style={styles.profileName}>علی ابرهیم پور</Text>,
        headerRight : <View style={styles.headerRightStyle}>
            <Icon name="md-filing" size={30} color='#333'
            onPress={() => navigation.navigate('Archive')}/>
            <Icon name="md-person-add" size={30} color='#333'/>
            <Icon name="md-more" size={30} color='#333'/>
        </View>
    });

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row' , height : 150 , paddingTop : 10}}>
                    <View style={styles._profileImage.container}>
                        <Image source={require('./../../assets/images/bg.png')} style={styles._profileImage.image} />
                        <Icon name="md-add-circle" size={30} color="#3498db" style={styles._profileImage.icon}/>
                    </View>
                    <View style={styles._profileInfo.container}>
                        <View style={styles._profileInfo.info}>
                            <View style={{ flex : .33}}>
                                <Text style={styles.infoTextNumber}>129</Text>
                                <Text style={styles.infoText}>پست ها</Text>
                            </View>
                            <View style={{ flex : .33}}>
                                <Text style={styles.infoTextNumber}>129</Text>
                                <Text style={styles.infoText}>پست ها</Text>
                            </View>
                            <View style={{ flex : .33}}>
                                <Text style={styles.infoTextNumber}>129</Text>
                                <Text style={styles.infoText}>پست ها</Text>
                            </View>
                        </View>
                        <View style={{ height : 130 , alignItems: 'center' , flexDirection : 'row' , marginLeft : 30 , marginRight : 15}}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Settings')}
                                              activeOpacity={.6} style={{ borderWidth: 1 ,
                                borderColor : 'rgba(0,0,0,0.3)' , borderRadius: 2 , flex : 1}}>
                                <Text style={{ textAlign : 'center' , fontFamily : 'IRANSansMobile', padding : 2}}>ویرایش پروفایل</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ flex :1}}>
                    <TabProfileView/>
                </View>
            </View>
        )
    }
}

const styles = EStyleSheet.create({
    container : {
        flex : 1,
        backgroundColor: 'white'
    },
    _profileInfo : {
        container : {
            flex : .7
        },
        info : {
            flexDirection : 'row',
            flex : 4,
            justifyContent: 'space-between',
            margin : 15
        }
    },
    infoTextNumber : {
        '@media ios' : {
            fontFamily : 'IRANSansMobile',
            fontWeight : "bold"
        },
        '@media android' : {
            fontFamily : 'IRANSansMobile_Bold',
        },
        fontSize : 16,
        color : '#222',
        textAlign: 'center'
    },
    infoText : {
        '@media ios' : {
            fontFamily : 'IRANSansMobile',
            fontWeight : "300"
        },
        '@media android' : {
            fontFamily : 'IRANSansMobile_Light',
        },
        textAlign : 'center'
    },
    _profileImage : {
        container : {
            flex: .3,
            alignItems : 'center',
            marginTop : 15
        },
        image : {
            width: 80,
            height: 80,
            borderRadius : 40,
            borderColor : '#888',
            borderWidth : 2,
            margin : 5
        },
        icon : {
            bottom : 35,
            left : 30,
            borderRadius: 18,
            overflow : 'hidden'
        }
    },
    profileName : {
        '@media ios' : {
            fontFamily : 'IRANSansMobile',
            fontWeight : "bold"
        },
        '@media android' : {
            fontFamily : 'IRANSansMobile_Bold',
        },
        fontSize : 16 ,
        marginLeft : 10,
        color : '#333'
    },
    headerRightStyle : {
        flexDirection : 'row' ,
        width : 85 ,
        marginRight : 10 ,
        justifyContent: 'space-between'
    }
});
import React , { Component } from 'react';
import { View , Image , Text , StyleSheet , Platform , Dimensions , ScrollView} from 'react-native';
import OriginalStyle from './../assets/style';

export default class Article extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle : <Text style={OriginalStyle.headerTitleStyle}>{navigation.state.params.article.title}</Text>,
        headerStyle : {
            backgroundColor : '#fffcaa'
        },
    });

    render() {
        const { title , image , body } = this.props.navigation.state.params.article;
        return (
            <ScrollView>
                <Image source={image} style={styles.image} />
                <View style={{ padding : 10}}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.body}>{body}</Text>
                </View>
            </ScrollView>
        )
    }

}
const styles = StyleSheet.create({

    // container : {
    //     flex : .5,
    //     margin: 5,
    //     backgroundColor : 'white',
    //     elevation : 1,
    //     shadowColor : '#000',
    //     shadowOffset : { width : 0 , height: 20},
    //     shadowOpacity : .2,
    // },
    image : {
        width : '100%',
        height: 130,
    },
    title : {
        fontSize : 16,
        ...Platform.select({
            ios : {
                fontFamily : 'IRANSansMobile',
                fontWeight : "bold",
                textAlign : 'left'
            } ,
            android : {
                fontFamily : 'IRANSansMobile_Bold',
            }
        }),

    },
    body : {
        fontFamily : 'IRANSansMobile',
        fontSize : 12,
        ...Platform.select({
            ios : {
                textAlign : 'left'
            }
        })
    }
});
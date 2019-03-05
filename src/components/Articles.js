import React , { Component } from 'react';
import Article from "./Article";
import { ScrollView , ListView , FlatList , StyleSheet , StatusBar , View ,Text, SectionList } from "react-native";
import Header from "./Header";

export default class Articles extends Component {

    _renderArticle(article) {
        return <Article navigation={this.props.navigation} image={article.imageUrl} title={article.title} body={article.body}/>
    }

    render() {
        return (
            <View style={{ flex : 1}}>
                <StatusBar
                    hidden
                />
                <FlatList
                    data={this.props.articles}
                    renderItem={({ item }) => this._renderArticle(item)}
                    keyExtractor={(item , index) => index}
                    numColumns={2}
                />
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'space-between',
        margin : 10
    }
})
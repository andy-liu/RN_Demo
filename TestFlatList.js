import React, {Component} from 'react';
import {View, Text,Image, FlatList, StyleSheet} from 'react-native';

const datas = [
    {
        "image": "https://static.gethover.com/build/images/showcase/thumbnail/app/pic_20170411_08-f1319134d6.jpg",
        "likes": 50,
        "shares": 43,
        "views": 150,
        "authorInfo": {
            "username": "Baymax",
            "avatar": "https://static.gethover.com/build/images/showcase/thumbnail/app/pic_20170411_08-f1319134d6.jpg",
        },
        "width": 1920,
        "height": 1080,
    },

    {
        "image": "https://static.gethover.com/build/images/showcase/thumbnail/app/pic_20170411_10-162c86d06d.jpg",
        "likes": 1234,
        "shares": 1050,
        "views": 13,
        "authorInfo": {
            "username": "Monie Weng",
            "avatar": "https://static.gethover.com/build/images/showcase/thumbnail/app/pic_20170411_10-162c86d06d.jpg",
        },
        "width": 800,
        "height": 600,
    },

    {
        "image": "https://static.gethover.com/build/images/showcase/thumbnail/app/pic_20170524_08-676c9df6b6.jpg",
        "likes": 730,
        "shares": 1050,
        "views": 13,
        "authorInfo": {
            "username": "Aaria arredondo",
            "avatar": "http://www.qqday.com/uploads/allimg/121222/11321QW3-9.jpghttps://static.gethover.com/build/images/showcase/thumbnail/app/pic_20170411_10-162c86d06d.jpg",
        },
        "width": 2000,
        "height": 1200,
    },

];
export default class HelloWorld extends Component {
    render() {
        return (
            <View style={{width: '100%', height: '100%', backgroundColor: 'black'}}>
                <FlatList
                    data={datas}
                    renderItem={({item}) => <Image
                        source={{uri: item.image}}
                        style={{width: 400, height: 200, marginTop: 20}}/>}
                >
                </FlatList>
            </View>
        )
    }
}
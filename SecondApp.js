/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import {View} from 'react-native';
import NavBar from "./subComponent/NavBar";
import SocialImage from "./subComponent/SocialImage";
import ImageOperation from "./subComponent/ImageOperation";

const datas = [
    {
        "image": "https://static.gethover.com/build/images/showcase/thumbnail/app/pic_20170411_09-0bdd2f9a4f.jpg",
        "likes": 50,
        "shares": 43,
        "views": 150,
        "authorInfo": {
            "username": "Baymax",
            "avatar": "https://static.gethover.com/build/images/showcase/thumbnail/app/pic_20170411_12-188840f4e0.jpg",
        },
        "width": 1920,
        "height": 1080,
    },

    {
        "image": "http://pic1.5442.com/2015/0529/03/09.jpg",
        "likes": 1234,
        "shares": 1050,
        "views": 13,
        "authorInfo": {
            "username": "Monie Weng",
            "avatar": "http://2xtx.com/img/2017/06/8ed51deb00.jpg",
        },
        "width": 800,
        "height": 600,
    },

    {
        "image": "https://images3.alphacoders.com/829/829023.jpg",
        "likes": 730,
        "shares": 1050,
        "views": 13,
        "authorInfo": {
            "username": " Aaria arredondo",
            "avatar": "http://www.qqday.com/uploads/allimg/121222/11321QW3-9.jpg",
        },
        "width": 2000,
        "height": 1200,
    },

];


export default class HelloWorld extends Component {
    constructor(props){
        super(props);
        this.state={
            item_index: 0
        }
    }

    render() {
        return (
            <View style={{
                alignItems: 'center',
                flexDirection: 'column',
                width: '100%',
                height: '100%',
                backgroundColor: 'black'
            }}>
                <NavBar />
                <SocialImage
                    image={datas[0].image}
                />
                <ImageOperation
                    likeCount={datas[0].likes}
                    shareCount={datas[0].shares}
                />
            </View>
        );
    }
}
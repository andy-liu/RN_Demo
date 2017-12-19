/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import SocialDetail from './SocialDetail';

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
    constructor(props){
        super(props);
        this.state={
            item_index: 0
        }
    }

    componentWillMount(){
        console.log('test');
    }

    dataConvert(item) {
        return (
            {
                headIcon: item.authorInfo.avatar,
                userName: item.authorInfo.username,
                image: item.image,
                likeCount: item.likes,
                shareCount: item.shares
            }
        )
    }

    onClickNext(){
        let index = this.state.item_index;
        if(index==2){
            this.setState({
                item_index: 0
            })
        }
        else {
            this.setState({
                item_index: this.state.item_index + 1
            })
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
                <SocialDetail
                    item={this.dataConvert(datas[this.state.item_index])}
                />
                    <TouchableOpacity>
                        <Text style={{color: 'white', fontSize: 20, marginTop: 50}}
                              onPress={() =>{
                                  this.onClickNext();
                              }}
                        >
                        NextPic
                        </Text>
                    </TouchableOpacity>
            </View>
        );
    }
}
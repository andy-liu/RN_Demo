/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import {AppRegistry, View} from 'react-native';
import SocialDetail from './SocialDetail';

const datas = [
    {
        "image": "http://www.qmeng.wang/content/uploadfile/201507/1a69ee216d1fc75cf1a6b70fc2658c5f20150728152053.jpg",
        "likes": 50,
        "shares": 43,
        "views": 150,
        "authorInfo": {
            "username": "Baymax",
            "avatar": "http://www.qq22.com.cn/uploads/allimg/c161203/14PE55YXA0-25107.jpg",
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

    componentWillMount(){
        console.log(this.state.item_index);
            this.setState(
                {
                    item_index: 1
                }
            )
    }

    componentDidMount() {
        console.log(this.state.item_index);
        // this.interval = setInterval(()=> {
        //     this.setState(
        //         {
        //                 item_index: 2
        //         }
        //     )
        // }, 1000);
        this.setState(
            {
                item_index: 2
            }
        )
    }

    // componentWillUnmount() {
    //     clearInterval(this.interval);
    // }

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
                 >

                </SocialDetail>
            </View>
        );
    }
}

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);

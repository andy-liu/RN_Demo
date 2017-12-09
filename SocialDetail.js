import React, {Component} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import NavBar from './subComponent/NavBar';
import Author from './subComponent/Author';
import SocialImage from './subComponent/SocialImage';
import ImageOperation from './subComponent/ImageOperation';

export default class SocialDetail extends Component {
    render() {
        return (
            <View style={{
                alignItems: 'center',
                flexDirection: 'column',
                width: '100%',
                height: '100%',
                backgroundColor: 'black'
            }}>
                <NavBar/>
                <Author
                    headIcon={this.props.item.headIcon}
                    userName={this.props.item.userName}/>
                <SocialImage
                    image={this.props.item.image}
                />
                <ImageOperation
                    likeCount={this.props.item.likeCount}
                    shareCount={this.props.item.shareCount}
                />
            </View>
        );
    }
}

SocialDetail.propTypes = {
    item:PropTypes.shape({
        headIcon: PropTypes.string,
        userName: PropTypes.string,
        image: PropTypes.string,
        likeCount: PropTypes.number,
        shareCount: PropTypes.number
    })
};
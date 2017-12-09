import React, {Component} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';

export default class SocialImage extends Component{
    render(){
        return(
            <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center',marginTop: 10}}>
                <Image
                    source={{uri: this.props.image}}
                    style={styles.image}>
                </Image>
            </View>
        );
    }
}

SocialImage.propTypes = {
    image: PropTypes.string
};

const styles = StyleSheet.create({
    image: {
        width: 400,
        height: 200,
    },
})
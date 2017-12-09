import React, {Component} from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

export default class Author extends Component{
    render(){
        return (
            <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 50}}>
                <Image
                    source={{uri: this.props.headIcon}}
                    style={styles.image}
                >
                </Image>
                <Text style={styles.text}>
                    {this.props.userName}
                </Text>
            </View>

        );
    }
}

Author.propTypes = {
    headIcon: PropTypes.string,
    userName: PropTypes.string
};



const styles = StyleSheet.create({
    image: {
        width: 44,
        height: 44,
        borderRadius: 50
    },
    text:{
        fontSize: 15,
        color: 'white',
        textAlign: 'center'
    }

})
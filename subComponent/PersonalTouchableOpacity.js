
import React, {Component} from 'react';
import {AppRegistry, Image, Text, View, TouchableOpacity} from 'react-native';

export default class PersonalTouchableOpacity extends Component{


    render(){
        return (
            <View>
                <TouchableOpacity
                    onPress = {this.props.onPress}>
                    <Image
                        source={this.props.icon}
                        style={this.props.style}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}
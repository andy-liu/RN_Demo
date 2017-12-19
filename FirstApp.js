/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class HelloWorld extends Component {
    render() {
        return (
            <View style={{
                alignItems: 'center',
                flexDirection: 'column',
                width: '100%',
                height: '100%',
                backgroundColor: 'black'
            }}>
                <Text style={{color: 'white', marginTop: 30}}>
                    十里平湖霜满天，
                    寸寸青丝愁华年。
                    对月行单望相互，
                    只羡鸳鸯不羡仙。
                </Text>
            </View>
        );
    }
}
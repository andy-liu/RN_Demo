import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class Try extends Component{
    render(){
        return(
            <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center',marginTop: 10}}>
                <Text style={styles.Text}>
                    Hello World.
                </Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    Text: {
        fontSize: 18,
        color: 'red',
    },
})
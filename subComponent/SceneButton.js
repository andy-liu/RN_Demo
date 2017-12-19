import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

export default class SceneButton extends Component {

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={this.props.onPress}>
                    <Text style={{color: 'white', fontSize: this.props.size}}>
                        {this.props.name}
                    </Text>
                </TouchableOpacity>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

SceneButton.propTypes = {
    onPress: PropTypes.func,
    size: PropTypes.number
};

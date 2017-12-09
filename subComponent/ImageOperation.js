import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import PersonalTouchableOpacity from './PersonalTouchableOpacity';

export default class ImageOperation extends Component {

    constructor(props) {
        super(props)
        this.state = {
            likeCount: this.props.likeCount,
            shareCount: this.props.shareCount
        }
    }

    render() {
        return (

            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 50
                }}>
                <View style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <PersonalTouchableOpacity
                        icon={require('./img/home_like_red.png')}
                        style={styles.icon}
                        onPress={() => {
                            this.setState({
                                likeCount: this.state.likeCount + 1
                            })
                        }}


                    >
                    </PersonalTouchableOpacity>
                    <Text style={{
                        fontSize: 11,
                        color: 'white',
                        textAlign: 'center'
                    }}>{this.state.likeCount}</Text>
                </View>

                <View style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 50
                }}>
                    <PersonalTouchableOpacity
                        icon={require('./img/home_share.png')}
                        style={styles.icon}
                        onPress={() => {
                            this.setState(
                                {
                                    shareCount: this.state.shareCount + 1
                                }
                            )
                        }}
                    >
                    </PersonalTouchableOpacity>
                    <Text style={styles.text}>{this.state.shareCount}</Text>
                </View>
            </View>
        );
    }
}

ImageOperation.propTypes = {
    likeCount: PropTypes.number,
    shareCount: PropTypes.number
};


const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24
    },
    text: {
        fontSize: 11,
        color: 'white',
        textAlign: 'center'
    }

})
import React, {Component} from 'react';
import {Image, Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

export default class PreviewItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            likeCount: this.props.socialItem.likeCount
        }
    }

    render() {
        return (
            <View
                style={styles.container}>
                <Image
                    source={{uri: this.props.socialItem.thumbnail}}
                    style={styles.image}>
                </Image>

                <View style={styles.imageOperationContainer}>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={require('./img/head_icon.jpg')}
                               style={styles.HeadIcon}>
                        </Image>
                        <Text style={styles.text}>
                            {this.props.socialItem.userName}
                        </Text>
                    </View>

                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({
                                    likeCount: this.state.likeCount + 1
                                })
                            }}>
                            <Image
                                source={require('./img/home_like_red.png')}
                                style={styles.likeIcon}>
                            </Image>
                        </TouchableOpacity>
                        <Text style={styles.text}>
                            {this.state.likeCount}
                        </Text>
                    </View>
                        <TouchableOpacity style={{flex: 1}}>
                            <Image
                                style={styles.shareIcon}
                                source={require('./img/home_share.png')}
                            />
                        </TouchableOpacity>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom: 20
    },
    imageOperationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: -60,
        padding: 14
    },
    image: {
        width: 400,
        height: 200,
        borderRadius: 10
    },
    text: {
        marginLeft: 5,
        fontSize: 14,
        color: 'white'
    },
    HeadIcon: {
        width: 24,
        height: 24,
        borderRadius: 15,
    },
    likeIcon: {
        width: 24,
        height: 24
    },
    shareIcon: {
        width: 24,
        height: 24
    }

})

PreviewItem.propTypes = {
    socialItem: PropTypes.shape({
        thumbnail: PropTypes.string,
        userName: PropTypes.string,
        likeCount: PropTypes.number
    })
};
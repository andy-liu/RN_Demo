import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import PersonalTouchableOpacity from './PersonalTouchableOpacity'

export default class NavBar extends Component {
    render() {
        return (
            <View style={{
                width: '100%',
                height: 64,
                backgroundColor: 'black',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <View style={{flex: 1}}>
                    <PersonalTouchableOpacity
                        icon={require('./img/home_album.png')}
                        style={styles.iconAlbum}
                    />
                </View>

                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <PersonalTouchableOpacity
                        icon={require('./img/Logo.png')}
                        style={styles.iconLogo}>
                    </PersonalTouchableOpacity>
                </View>

                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
                    <PersonalTouchableOpacity
                        icon={require('./img/home_service.png')}
                        style={styles.iconService}>
                    </PersonalTouchableOpacity>

                    <PersonalTouchableOpacity
                        icon={require('./img/home_settings.png')}
                        style={styles.iconSettings}>
                    </PersonalTouchableOpacity>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    iconAlbum: {
        width: 24,
        height: 24,
        marginLeft: 20
    },
    iconLogo:{
        width: 65,
        height: 26
    },
    iconService:{
        width: 24,
        height: 24,
        marginLeft: 20
    },
    iconSettings:{
        width: 24,
        height: 24,
        marginLeft: 30,
        marginRight: 20
    }

})
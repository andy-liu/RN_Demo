/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import PreviewItem from "./subComponent/PreviewItem";
import NavBar from "./subComponent/NavBar";
import SceneButton from "./subComponent/SceneButton";

export default class HelloWorld extends Component {
    constructor(props) {
        super(props);
        this.state = {
            netData: [],
            size: 17
        }

    }

    sceneList = ["First Step", "Group Photo", "Bird's Eye"];

    componentWillMount() {
        this.getData("GroupSelfie");
    }

    getData(sceneName) {
        let url = "http://1of3u43i2w.china.test.gethover.com/api/v1/showcase/scene.json?scene=" + sceneName + "&skip=1&take=0";
        fetch(url)
            .then(response => {
                return response.json()
            }).then(json => {
            let jsonItems = json.map((data) => {
                let item = this.dataConvert(data)
                return (item)
            })
            this.setState({
                netData: jsonItems
            })
        })
            .catch(error => {
                console.log("error" + error)
            })
    }

    // componentDidMount() {
    //
    // }

    // componentWillUnmount() {
    //
    //
    // }

    dataConvert(item) {
        return (
            {
                thumbnail: item.thumbnail,
                userName: item.authorInfo.username,
                likeCount: item.likes
            }
        )
    }

    sceneSelect(sceneName) {
        this.getData(sceneName);
    }

    render() {
        return (
            <View style={styles.container}>
                <NavBar/>
                <FlatList
                    data={this.state.netData}
                    renderItem={({item}) => <PreviewItem socialItem={item}/>
                    }
                />
                <View style={styles.sceneContainer}>
                    <SceneButton
                        name={this.sceneList[0]}
                        size={this.state.size}
                        onPress={() => {
                            this.sceneSelect("FirstStep")
                        }}
                    />
                    <SceneButton
                        name={this.sceneList[1]}
                        size={this.state.size}
                        onPress={() => {
                            this.sceneSelect("GroupSelfie")
                        }}
                    />
                    <SceneButton
                        name={this.sceneList[2]}
                        size={this.state.size}
                        onPress={() => {
                            this.sceneSelect("BirdsEye")
                        }}
                    />
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        backgroundColor: 'black'
    },
    sceneContainer: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }

})
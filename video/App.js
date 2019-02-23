/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import VideoPlayer from 'react-native-video-controls';
import Video from 'react-native-video';
import BallVideo from './resources/ballfall0001-0085.mp4';

export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      rate: 0.1
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Video
          repeat={true}
          source={BallVideo}
          ref={(ref) =>  {
              this.player = ref;
            }}
          onBuffer={this.onBuffer}
          onEnd={this.onEnd}
          onError={this.videoError}
          style={styles.backgroundVideo}
          rate={this.state.rate}
        />
      <View style={styles.generalControls}>
          <View style={styles.rateControl}>
            <TouchableOpacity onPress={() => { this.setState({rate: 0.04167}) }}>
              <Text style={[styles.controlOption]}>
                0.04x
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { this.setState({rate: 0.1}) }}>
              <Text style={[styles.controlOption]}>
                0.1x
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { this.setState({rate: 0.3}) }}>
              <Text style={[styles.controlOption]}>
                0.3x
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { this.setState({rate: 0.5}) }}>
              <Text style={[styles.controlOption]}>
                0.5x
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { this.setState({rate: 1.0}) }}>
              <Text style={[styles.controlOption]}>
                1.0x
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    flexDirection: 'column',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  rateControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  controlOption: {
    alignSelf: 'center',
    fontSize: 11,
    color: 'white',
    paddingLeft: 2,
    paddingRight: 2,
    paddingTop: 50,
    lineHeight: 12,
    fontSize: 16
  },
  generalControls: {
    flex: 1,
    flexDirection: 'row',
    overflow: 'hidden',
    paddingBottom: 10,
  }
});

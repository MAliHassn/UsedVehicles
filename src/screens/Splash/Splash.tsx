import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '../../constants/Colors';
import { images } from '../../constants/Images';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../constants/Screen';
import { Fonts } from '../../constants/Fonts';
import {useSplash} from './Hooks';

const Splash = () => {
  const {} = useSplash();

  return (
    <View style={styles.container}>
      <Image source={images.app_logo} style={styles.image} resizeMethod="auto" />

      <View style={styles.bottom_view}>
        <Text style={styles.text}>Powered by</Text>
        <Image source={images.rak_bank} style={styles.rak_bank_image} resizeMethod="auto" />
      </View>

      <Image
        source={images.splashBg}
        style={styles.bottomBg}
        resizeMode="stretch"
      />

    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white
  },
  image: {
    aspectRatio: 2,
    height: "auto",
    width: SCREEN_WIDTH * 0.7,
  },
  bottom_view: {
    position: "absolute",
    bottom: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: Colors.black,
    fontSize: Fonts.body
  },
  rak_bank_image: {
    aspectRatio: 1,
    height: "auto",
    width: SCREEN_WIDTH * 0.15,
  },
  bottomBg: {
    position: 'absolute',
    bottom: 30,
    width: SCREEN_WIDTH,
    height:SCREEN_HEIGHT/2.5,
    zIndex:-1
  },
});
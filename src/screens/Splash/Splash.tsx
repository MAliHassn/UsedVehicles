import {Image, Text, View} from 'react-native';
import React from 'react';
import {images} from '../../constants/Images';
import {useSplash} from './Hooks';
import useStyles from './styles';

const Splash = () => {
  const {} = useSplash();
  const {styles} = useStyles();

  return (
    <View style={styles.container}>
      <Image
        source={images.app_logo}
        style={styles.image}
        resizeMethod="auto"
      />

      <View style={styles.bottom_view}>
        <Text style={styles.text}>Powered by</Text>
        <Image
          source={images.rak_bank}
          style={styles.rak_bank_image}
          resizeMethod="auto"
        />
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

import React from 'react';
import {Image, Pressable, View} from 'react-native';
import {images} from '../constants/Images';
import {useNavigation} from '@react-navigation/native';
import useStyles from './styles';

const Header = React.memo(({}) => {
  const navigation = useNavigation();
  const {styles} = useStyles();

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.back}
        onPress={() => {
          navigation.goBack();
        }}>
        <Image
          source={images.back}
          style={styles.selection}
          resizeMethod="auto"
        />
      </Pressable>

      <Image
        source={images.app_logo}
        style={styles.app_logo}
        resizeMethod="auto"
      />
    </View>
  );
});

export default Header;

import {StyleSheet} from 'react-native';
import {useCustomTheme} from '../../constants/useCustomTheme';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../constants/Screen';

const useStyles = () => {
  const {colors, fonts} = useCustomTheme();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.white,
    },
    image: {
      aspectRatio: 2,
      height: 'auto',
      width: SCREEN_WIDTH * 0.7,
    },
    bottom_view: {
      position: 'absolute',
      bottom: 10,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: colors.black,
      fontSize: fonts.body,
    },
    rak_bank_image: {
      aspectRatio: 1,
      height: 'auto',
      width: SCREEN_WIDTH * 0.15,
    },
    bottomBg: {
      position: 'absolute',
      bottom: 30,
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT / 2.5,
      zIndex: -1,
    },
  });

  return {
    styles,
  };
};

export default useStyles;

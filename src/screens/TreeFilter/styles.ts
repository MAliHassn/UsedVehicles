import {StyleSheet} from 'react-native';
import {useCustomTheme} from '../../constants/useCustomTheme';

const useStyles = () => {
  const {colors, fonts} = useCustomTheme();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
    filter: {
      padding: 10,
      marginBottom: 110,
      paddingTop: 0,
      flex: 1,
    },
    selected: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: 80,
      elevation: 8,
      left: 0,
      right: 0,
      height: 40,
      marginHorizontal: 10,
    },
    apply: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: 20,
      elevation: 8,
      left: 0,
      right: 0,
      height: 50,
      marginHorizontal: 10,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    text: {
      color: colors.white,
      fontSize: fonts.heading,
    },
    subtext: {
      color: colors.black,
      fontSize: fonts.sub_body,
    },
  });

  return {
    styles,
  };
};

export default useStyles;

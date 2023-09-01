import {StyleSheet} from 'react-native';
import {useCustomTheme} from '../../constants/useCustomTheme';

const useStyles = () => {
  const {colors, fonts} = useCustomTheme();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },

    viewSearch: {
      padding: 5,
      elevation: 10,
      flexDirection: 'row',
      borderRadius: 50,
      borderWidth: 1,
      borderColor: colors.white,
      height: 40,
    },
    input: {
      flex: 1,
      padding: 5,
      paddingLeft: 5,
      fontSize: fonts.sub_heading,
      height: 'auto',
      color: colors.white,
    },
    icon: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: 22,
      height: 22,
    },
    linerar: {
      padding: 10,
      justifyContent: 'center',
      // alignItems: "center",
      elevation: 8,
    },
    filter: {
      flex: 0.15,
      elevation: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return {
    styles,
  };
};

export default useStyles;

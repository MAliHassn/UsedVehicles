import {StyleSheet} from 'react-native';
import {useCustomTheme} from '../constants/useCustomTheme';
import {SCREEN_WIDTH} from '../constants/Screen';

const useStyles = () => {
  const {colors, fonts} = useCustomTheme();
  const icon_container_height = 22;
  const icon_center_height = 9;
  const _spacing = 10;
  const styles = StyleSheet.create({
    selection: {
      aspectRatio: 1,
      height: 22,
      width: 22,
    },
    container: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: -10,
    },
    back: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 50,
      width: 50,
    },
    app_logo: {
      aspectRatio: 2,
      height: 70,
      width: 'auto',
    },
    text: {
      color: colors.dark_gray,
      fontSize: fonts.body,
      paddingStart: 3,
    },
    scrollView: {
      paddingBottom: 20,
    },
    all: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    line_container: {
      width: 22,
      alignItems: 'center',
    },
    line: {
      width: 1.5,
      height: 40,
      backgroundColor: colors.gray,
    },
    childern: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
    },
    node: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    parent: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingVertical: 5,
    },
    tab: {
      shadowColor: '#000',
      shadowOffset: {
        width: 1,
        height: 2,
      },
      shadowOpacity: 3,
      shadowRadius: 8,
      elevation: 5,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: _spacing / 2,
      padding: 5,
      paddingHorizontal: 10,
      flexDirection: 'row',
    },
    icon: {
      width: 14,
      height: 14,
      marginEnd: 5,
    },
    selecedButton: {
      height: icon_container_height,
      width: icon_container_height,
      borderRadius: icon_container_height / 2,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 0,
      borderColor: 'transparent',
      backgroundColor: colors.primary,
    },
    unSelectedButton: {
      height: icon_container_height,
      width: icon_container_height,
      borderRadius: icon_container_height / 2,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1.5,
      borderColor: colors.medium_gray,
      backgroundColor: 'transparent',
    },
    selected: {
      height: icon_center_height,
      width: icon_center_height,
      borderRadius: icon_center_height / 2,
      backgroundColor: colors.white,
    },
    containerV: {
      flex: 1,
      margin: 5,
      shadowColor: '#000',
      shadowOffset: {
        width: 1,
        height: 2,
      },
      shadowOpacity: 3,
      shadowRadius: 10.32,
      elevation: 6,
      backgroundColor: colors.white,
      maxWidth:(SCREEN_WIDTH/2)-10
    },
    hot_deal: {
      position: 'absolute',
      bottom: 8,
      right: 8,
      height: 30,
      width: 30,
      borderRadius: 15,
      backgroundColor: 'rgba(0,0,0,0.6)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    favorite: {
      position: 'absolute',
      top: 8,
      left: 8,
      borderRadius: 10,
      backgroundColor: colors.white,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 5,
      paddingVertical: 2,
      flexDirection: 'row',
    },
    featured: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: 5,
      paddingVertical: 2,
      position: 'absolute',
      borderTopLeftRadius: 4,
      borderBottomLeftRadius: 4,
      top: 8,
      right: 0,
      elevation: 8,
    },
    content_container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 5,
      borderBottomColor: colors.medium_gray,
      borderBottomWidth: 0.5,
    },
    contentRow1: {
      flex: 0.6,
      justifyContent: 'flex-start',
    },
    contentRow2: {
      flex: 0.4,
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    elementRow: {
      alignItems: 'center',
      flexDirection: 'row',
    },
    image: {
      width: '100%',
      height: SCREEN_WIDTH * 0.4,
    },
    iconV: {
      width: 12,
      height: 12,
    },
    bookmark: {
      width: 18,
      height: 18,
    },
    textV: {
      fontSize: fonts.body,
      color: colors.dark_gray,
    },
  });

  return {
    styles,
  };
};

export default useStyles;

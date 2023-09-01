import React from 'react';
import {View, ViewStyle, StyleProp} from 'react-native';
import useStyles from './styles';
interface ToggleButtonProps {
  value: boolean;
  container?: StyleProp<ViewStyle>;
}

const ToggleButton: React.FC<ToggleButtonProps> = React.memo(({value}) => {
  const {styles} = useStyles();
  return (
    <View style={value ? styles.selecedButton : styles.unSelectedButton}>
      {value ? <View style={styles.selected} /> : null}
    </View>
  );
});

export default ToggleButton;

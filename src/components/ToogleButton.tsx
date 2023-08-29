import React from 'react';
import { View, StyleSheet, ViewStyle, StyleProp } from 'react-native';
import { Colors } from '../constants/Colors';

interface ToggleButtonProps {
    value: boolean;
    container?: StyleProp<ViewStyle>;
}

const icon_container_height = 22;
const icon_center_height = 9;

const ToggleButton: React.FC<ToggleButtonProps> = React.memo(({ value }) => {
    return (
        <View style={value ? styles.selecedButton : styles.unSelectedButton}>
            {value ? <View style={styles.selected} /> : null}
        </View>
    );
});

export default ToggleButton;

const styles = StyleSheet.create({
    selecedButton: {
        height: icon_container_height,
        width: icon_container_height,
        borderRadius: icon_container_height / 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0,
        borderColor: 'transparent',
        backgroundColor: Colors.primary,
    },
    unSelectedButton: {
        height: icon_container_height,
        width: icon_container_height,
        borderRadius: icon_container_height / 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: Colors.medium_gray,
        backgroundColor: 'transparent',
    },
    selected: {
        height: icon_center_height,
        width: icon_center_height,
        borderRadius: icon_center_height / 2,
        backgroundColor: Colors.white,
    },
});

import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { Colors } from '../constants/Colors';
import { images } from '../constants/Images';
import { Fonts } from '../constants/Fonts';
import { useNavigation } from '@react-navigation/native';


const Header = React.memo(
    ({

    }) => {
        const navigation = useNavigation();
        return (
            <View
                style={styles.container}>
                <Pressable
                    style={styles.back}
                    onPress={() => { navigation.goBack() }}
                >
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
    }
);




export default Header;

const styles = StyleSheet.create({
    selection: {
        aspectRatio: 1,
        height: 22,
        width: 22,
    },
    container: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop:-10,
    },
    back: {
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        width: 50,
    },
    app_logo: {
        aspectRatio: 2,
        height: 70,
        width: "auto",
    },
    text: {
        color: Colors.dark_gray,
        fontSize: Fonts.body,
        paddingStart: 3,
    },
});
import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Pressable,
  Text,
  Animated,
  StyleSheet,
  Image
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../constants/Colors';
import { Fonts } from '../constants/Fonts';

const _colors = {
  active: [Colors.secondary, Colors.primary,],
  inactive: ['rgba(128, 128, 128,0.3)', 'rgba(128, 128, 128, 0.1)',],
};

const _spacing = 10;

export default function TabsSwitcher(props) {
  const ref = useRef(null);
  const [index, setIndex] = useState(0);
  const offset = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (index && ref?.current) {
      ref.current?.scrollToIndex({
        index: index,
        animated: true,
        viewPosition: 0.5, // in view center or lrft right
        viewOffset: 0
      })
    }
  }
    , [
      index
    ]
  )

  const onViewRef = useRef((viewableItems) => { })
  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 })

  return (
    <View style={{
      alignItems: 'center', justifyContent: 'center',
    }}>
      <Animated.FlatList
        disableVirtualization={true}
        removeClippedSubviews
        ref={ref}
        style={{ flexGrow: 0, }}
        data={props.data}
        initialScrollIndex={index}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: offset } } }], {
          useNativeDriver: false,
        })}
        onScrollToIndexFailed={info => {
          const wait = new Promise(resolve => setTimeout(resolve, 500));
          wait.then(() => {
            ref.current?.scrollToIndex({ index: info.index, animated: true });
          });
        }}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ paddingLeft: _spacing }}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({ item, index: fIndex }) => {
          return (
            <Pressable onPress={() => {
              setIndex(fIndex)
              props.callBackSecTabSwitch(item, fIndex)
            }}>
              <LinearGradient
                colors={
                  fIndex === index ?
                    _colors.active
                    :
                    _colors.inactive
                }
                style={styles.tab}
                start={{ x: 1, y: 0 }}
                end={{ x: 0.5, y: 0.7 }}
              >
                <Image
                  source={item.image}
                  style={styles.icon}
                  resizeMethod="auto"
                />
                <Text
                  style={[
                    {
                      marginTop: -2.5,
                      fontSize: Fonts.body,
                      color: fIndex === index ? "white" : "#878787",
                    }
                  ]}>
                  {item.title}
                </Text>
              </LinearGradient>
            </Pressable>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  tab: {
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 3,
    shadowRadius: 8,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
    marginRight: _spacing / 2,
    padding: 5,
    paddingHorizontal: 10,
    flexDirection: "row"
  },
  icon: {
    width: 14,
    height: 14,
    marginEnd: 5
  },
});
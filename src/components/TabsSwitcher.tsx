import React, {useState, useRef, useEffect} from 'react';
import {View, Pressable, Text, Animated, Image, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useCustomTheme} from '../constants/useCustomTheme';
import useStyles from './styles';
const _spacing = 10;

export default function TabsSwitcher(props: Props) {
  const ref = useRef<FlatList<TabItem> | null>(null);
  const [index, setIndex] = useState<number>(0);
  const offset = useRef(new Animated.Value(0)).current;
  const {colors, fonts} = useCustomTheme();
  const {styles} = useStyles();
  const _colors = {
    active: [colors.secondary, colors.primary],
    inactive: ['rgba(128, 128, 128,0.3)', 'rgba(128, 128, 128, 0.1)'],
  };
  useEffect(() => {
    if (index && ref.current) {
      ref.current.scrollToIndex({
        index: index,
        animated: true,
        viewPosition: 0.5, // in view center or left/right
        viewOffset: 0,
      });
    }
  }, [index]);

  const onViewRef = useRef((viewableItems: any) => {});
  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});

  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Animated.FlatList
        disableVirtualization={true}
        removeClippedSubviews
        ref={ref}
        style={{flexGrow: 0}}
        data={props.data}
        initialScrollIndex={index}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: offset}}}],
          {
            useNativeDriver: false,
          },
        )}
        onScrollToIndexFailed={info => {
          const wait = new Promise(resolve => setTimeout(resolve, 500));
          wait.then(() => {
            ref.current?.scrollToIndex({index: info.index, animated: true});
          });
        }}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{paddingLeft: _spacing}}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({item, index: fIndex}) => {
          return (
            <Pressable
              onPress={() => {
                setIndex(fIndex);
                props.callBackSecTabSwitch(item, fIndex);
              }}>
              <LinearGradient
                colors={fIndex === index ? _colors.active : _colors.inactive}
                style={styles.tab}
                start={{x: 1, y: 0}}
                end={{x: 0.5, y: 0.7}}>
                <Image
                  source={item.image}
                  style={styles.icon}
                  resizeMethod="auto"
                />
                <Text
                  style={[
                    {
                      marginTop: -2.5,
                      fontSize: fonts.body,
                      color: fIndex === index ? 'white' : '#878787',
                    },
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

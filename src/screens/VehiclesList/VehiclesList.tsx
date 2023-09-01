import {
  Image,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  ListRenderItemInfo,
} from 'react-native';
import React, {useCallback, useRef} from 'react';
import VehiclesListItem from '../../components/VehiclesListItem';
import TabsSwitcher from '../../components/TabsSwitcher';
import {images} from '../../constants/Images';
import LinearGradient from 'react-native-linear-gradient';
import {useVehicles} from './Hooks';
import {useCustomTheme} from '../../constants/useCustomTheme';
import useStyles from './styles';

const VehiclesList = () => {
  const listRef = useRef<FlatList>(null);
  const {
    navigateTo,
    filterUpdate,
    mainFilters,
    viewConfigRef,
    callBackUpdate,
    vehiclesData,
    input,
  } = useVehicles();
  const {styles} = useStyles();
  const {colors} = useCustomTheme();
  const renderItem = useCallback(
    ({item, index}: ListRenderItemInfo<IVehiclesItem>) => {
      return (
        <VehiclesListItem
          key={index.toString()}
          item={item}
          callBackFav={() => {
          }}
        />
      );
    },
    [],
  );

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.secondary, colors.primary]}
        style={styles.linerar}
        start={{x: 1, y: 0}}
        end={{x: 0.2, y: 0.9}}>
        <View style={styles.viewSearch}>
          <View style={{flex: 0.15, elevation: 5}}>
            <TouchableOpacity
              style={styles.icon}
              onPress={() => {
                if (!isNaN(Number(input)) && Number(input) > -1) {
                  callBackUpdate(input);
                } else {
                  return;
                }
              }}>
              <Image
                source={images.search}
                style={styles.image}
                resizeMethod="auto"
              />
            </TouchableOpacity>
          </View>

          <View style={{flex: 0.7, paddingStart: 5}}>
            <TextInput
              value={input}
              onSubmitEditing={() => callBackUpdate(input)}
              onChangeText={text => callBackUpdate(text)}
              style={styles.input}
              placeholder={'Search in vehicles'}
              placeholderTextColor={colors.gray}
            />
          </View>

          <View style={styles.filter}>
            <TouchableOpacity
              testID="filter"
              style={styles.icon}
              onPress={() => {
                navigateTo();
                // navigation.navigate('TreeFilter')
              }}>
              <Image
                source={images.filter}
                style={styles.image}
                resizeMethod="auto"
              />
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>

      <View style={{marginVertical: 10, alignSelf: 'flex-start'}}>
        <TabsSwitcher
          key={'tabs'}
          data={mainFilters}
          callBackSecTabSwitch={(item: any, index: number) => {
            filterUpdate(item);
          }}
        />
      </View>

      <FlatList
        ref={listRef}
        disableVirtualization={true}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews
        viewabilityConfig={viewConfigRef.current}
        contentContainerStyle={{paddingBottom: 20}}
        data={vehiclesData as IVehiclesItem[]}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default VehiclesList;

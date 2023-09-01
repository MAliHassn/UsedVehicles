import React from 'react';
import {
  Text,
  View,
  Pressable,
  Image
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {get_price_as_format} from '../utils';
import {images} from '../constants/Images';
import {useCustomTheme} from '../constants/useCustomTheme';
import useStyles from './styles';

interface IListProps {
  item: any;
  key?: string;
  callBackFav: () => void;
}

const VehiclesListItem = (props: IListProps) => {
  const {item, callBackFav} = props;
  const {colors, fonts} = useCustomTheme();
  const {styles} = useStyles();

  return (
    <Pressable
      style={styles.containerV}
      onPress={() => {
      }}>
      <View>
        <Image source={item.image} style={styles.image} resizeMethod="auto" />

        <Pressable
          style={styles.hot_deal}
          testID={'heart-icon'}
          onPress={() => {
            callBackFav();
          }}>
          <Image
            source={item.favorite ? images.heart_fill : images.heart_empty}
            style={styles.bookmark}
            resizeMethod="auto"
          />
        </Pressable>

        {item.hot_deals == 1 && (
          <View style={styles.favorite}>
            <Image
              source={images.hot_deal}
              style={styles.icon}
              resizeMethod="auto"
            />
            <Text style={styles.textV}>{item.off} OFF</Text>
          </View>
        )}

        {(item.featured == 1 ||
          item.urgent_sale == 1 ||
          item.negotiatable == 1) && (
          <LinearGradient
            colors={[colors.secondary, colors.primary]}
            style={styles.featured}
            start={{x: 1, y: 0}}
            end={{x: 0.2, y: 0.9}}>
            <Text style={{fontSize: fonts.body, color: colors.white}}>
              {item.urgent_sale == 1
                ? 'Urgent sale'
                : item.negotiatable == 1
                ? 'Negotiatable'
                : 'Featured'}
            </Text>
          </LinearGradient>
        )}
      </View>

      <View style={styles.content_container}>
        <View style={styles.contentRow1}>
          <Text style={styles.textV}>{item.title}</Text>
          <Text style={[styles.textV, {fontWeight: '600'}]}>
            {get_price_as_format(item.price)} {item.price_currency}
          </Text>
        </View>
        <View style={styles.contentRow2}>
          <View style={styles.elementRow}>
            <Image
              source={images.calendar}
              style={styles.icon}
              resizeMethod="auto"
            />
            <Text style={styles.textV}> {item.year}</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          padding: 5,
        }}>
        <View style={styles.elementRow}>
          <Image
            source={images.speed}
            style={styles.icon}
            resizeMethod="auto"
          />
          <Text style={styles.textV}>
            {' '}
            {item.meter} {item.meter_unit}
          </Text>
        </View>

        <View style={styles.elementRow}>
          <Image
            source={images.classification}
            style={styles.icon}
            resizeMethod="auto"
          />
          <Text style={styles.textV}> {item.model}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default React.memo(VehiclesListItem);

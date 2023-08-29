import React from "react";
import { StyleSheet, Text, View, Pressable, Image,FlatListProps } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { SCREEN_WIDTH } from "../constants/Screen";
import { Fonts } from "../constants/Fonts";
import { Colors } from "../constants/Colors";
import { get_price_as_format } from "../utils";
import { images } from "../constants/Images";

interface IListProps {
  item: any;
  key?: string;
  callBackFav:() => void;
}


  const VehiclesListItem = (props: IListProps) => {
  const { item,callBackFav } = props;
  return (

    <Pressable style={styles.container} onPress={() => {
      console.log("details")
    }}>
      <View>
        <Image
          source={item.image}
          style={styles.image}
          resizeMethod="auto"
        />

        <Pressable style={styles.hot_deal}
        onPress={()=>{callBackFav()}}
        >
          <Image
            source={
              item.favorite ?
                images.heart_fill
                :
                images.heart_empty
            }
            style={styles.bookmark}
            resizeMethod="auto"
          />
        </Pressable>

        {item.hot_deals == 1 &&
          <View style={styles.favorite}>
            <Image
              source={images.hot_deal}
              style={styles.icon}
              resizeMethod="auto"
            />
            <Text style={styles.text}>
              {item.off} OFF
            </Text>
          </View>
        }


        {(item.featured == 1 || item.urgent_sale == 1 || item.negotiatable == 1) &&
          <LinearGradient
            colors={[Colors.secondary, Colors.primary,]}
            style={styles.featured}
            start={{ x: 1, y: 0 }}
            end={{ x: 0.2, y: 0.9 }}
          >

            <Text style={{ fontSize: Fonts.body, color: Colors.white, }}>
              {item.urgent_sale == 1 ?
                "Urgent sale"
                :
                item.negotiatable == 1 ?
                  "Negotiatable"
                  :
                  "Featured"
              }
            </Text>
          </LinearGradient>
        }
      </View>

      <View style={styles.content_container}>

        <View style={styles.contentRow1}>
          <Text style={styles.text}>{item.title}</Text>
          <Text style={[styles.text, { fontWeight: "600" }]}>{get_price_as_format(item.price)} {item.price_currency}</Text>

        </View>
        <View style={styles.contentRow2}>

          <View style={styles.elementRow}>

            <Image
              source={images.calendar}
              style={styles.icon}
              resizeMethod="auto"
            />
            <Text style={styles.text}> {item.year}</Text>

          </View>

        </View>

      </View>

      <View style={{
        justifyContent: "space-between", flexDirection: "row",
        padding: 5,
      }}>

        <View style={styles.elementRow}>

          <Image
            source={images.speed}
            style={styles.icon}
            resizeMethod="auto"
          />
          <Text style={styles.text}> {item.meter} {item.meter_unit}</Text>

        </View>

        <View style={styles.elementRow}>

          <Image
            source={images.classification}
            style={styles.icon}
            resizeMethod="auto"
          />
          <Text style={styles.text}> {item.model}</Text>


        </View>


      </View>
    </Pressable>

  );
}

export default React.memo(VehiclesListItem);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 3,
    shadowRadius: 10.32,
    elevation: 6,
    backgroundColor: Colors.white
  },
  hot_deal: {
    position: "absolute",
    bottom: 8,
    right: 8,
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center"
  },
  favorite: {
    position: "absolute",
    top: 8,
    left: 8,
    borderRadius: 10,
    backgroundColor: Colors.white,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingVertical: 2,
    flexDirection: "row"
  },
  featured: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 5,
    paddingVertical: 2,
    position: "absolute",
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    top: 8,
    right: 0,
    elevation: 8,
  },
  content_container: {
    flexDirection: 'row',
    justifyContent: "space-between",
    padding: 5,
    borderBottomColor: Colors.medium_gray,
    borderBottomWidth: 0.5
  },
  contentRow1: {
    flex: 0.6,
    justifyContent: "flex-start"
  },
  contentRow2: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "flex-end"
  },
  elementRow: {
    alignItems: "center",
    flexDirection: "row",
  },
  image: {
    width: "100%",
    height: SCREEN_WIDTH * 0.4
  },
  icon: {
    width: 12,
    height: 12
  },
  bookmark: {
    width: 18,
    height: 18
  },
  text: {
    fontSize: Fonts.body,
    color: Colors.dark_gray
  }
});

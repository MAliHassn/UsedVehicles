import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '../../constants/Colors';
import { Fonts } from '../../constants/Fonts';
import Header from '../../components/Header';
import Filter from '../../components/Filter';
import LinearGradient from 'react-native-linear-gradient';
import { useFilter } from './Hooks';

const TreeFilter = () => {
  const { realTimeChanges,
    clickOnNodes,
    filter_data,
    checkedNode,
    checkedChilds,
    returnRow
  } = useFilter()

  return (
    <View style={styles.container}>

      <Header />

      <View style={styles.filter}>
        <Filter
          key={"test"}
          data={filter_data as Node[]}
          onPress={(v) => { realTimeChanges(v) }}
          onPressNode={(v) => { clickOnNodes(v) }}
        />
      </View>

      <LinearGradient
        colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.2)",]}
        style={styles.selected}
        start={{ x: 1, y: 0 }}
        end={{ x: 0.2, y: 0.9 }}
      >

        {returnRow(
          "tree ids:",
          checkedChilds?.ids,
          checkedNode?.id
        )}
        {returnRow(
          "tree titles:",
          checkedChilds?.titles,
          checkedNode?.title
        )}

      </LinearGradient>

      <LinearGradient
        colors={[Colors.secondary, Colors.primary,]}
        style={styles.apply}
        start={{ x: 1, y: 0 }}
        end={{ x: 0.2, y: 0.9 }}
      >
        <Pressable onPress={() => { console.log("") }}>
          <Text style={styles.text}>{"APPLY"}</Text>
        </Pressable>
      </LinearGradient>

    </View>
  );
};

export default TreeFilter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
  },
  filter: {
    padding: 10,
    marginBottom: 110,
    paddingTop: 0,
    flex: 1
  },
  selected: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 70,
    elevation: 8,
    left: 0,
    right: 0,
    height: 40,
    marginHorizontal: 10,
  },
  apply: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 10,
    elevation: 8,
    left: 0,
    right: 0,
    height: 50,
    marginHorizontal: 10
  },
  row: {
    flexDirection: "row",
    justifyContent: "center"
  },
  text: {
    color: Colors.white,
    fontSize: Fonts.heading
  },
  subtext: {
    color: Colors.black,
    fontSize: Fonts.sub_body
  },

});
import {Image, Pressable, ScrollView, Text, View} from 'react-native';
import React from 'react';
import {images} from '../constants/Images';
import ToogleButton from './ToogleButton';
import useStyles from './styles';

const Filter = (props: IFilterNodesProps) => {
  let {data, onPress, onPressNode} = props;
  const {styles} = useStyles();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollView}>
      {data?.map((item: any, index: number) => {
        return (
          <Logic
            item={item}
            key={index.toString()}
            key_value={index.toString()}
            onPress={v => {
              onPress(v);
            }}
            onPressNode={v => {
              onPressNode(v);
            }}
          />
        );
      })}
    </ScrollView>
  );
};

const Logic = (props: ILogicNodesProps) => {
  let {item, key_value, onPress, onPressNode} = props;

  return (
    <View key={key_value}>
      <Parent
        key_value={key_value}
        item={item}
        onPress={v => {
          onPress(v);
        }}
      />
      {item?.check && (
        <>
          {item?.nodes.length > 0 ? (
            <>
              {item?.nodes.map((childern_item: any, index: number) => {
                return (
                  <Child
                    key_value={index.toString()}
                    item={childern_item}
                    onPress={v => {
                      onPressNode(v);
                    }}
                  />
                );
              })}
            </>
          ) : (
            <>
              {item?.childern.map((childern_item: any, index: number) => {
                return (
                  <Repeat
                    key_value={index.toString()}
                    item={childern_item}
                    onPress={v => {
                      onPress(v);
                    }}
                    onPressNode={v => {
                      onPressNode(v);
                    }}
                  />
                );
              })}
            </>
          )}
        </>
      )}
    </View>
  );
};

const Parent = (props: IParentNodesProps) => {
  let {key_value, item, onPress} = props;
  const {styles} = useStyles();

  return (
    <Pressable
      key={key_value}
      style={styles.parent}
      onPress={() => {
        onPress(item);
      }}>
      <Image
        source={item.check ? images.minus : images.add}
        style={styles.selection}
        resizeMethod="auto"
      />

      <Text style={styles.text}>{item.title}</Text>
    </Pressable>
  );
};

const Child = (props: IChildNodesProps) => {
  let {key_value, item, onPress} = props;
  const {styles} = useStyles();

  return (
    <Pressable
      key={key_value}
      style={styles.childern}
      onPress={() => {
        onPress(item);
      }}>
      <View style={styles.line_container}>
        <View style={styles.line} />
      </View>

      <View style={{flex: 1}}>
        <Node
          key={key_value}
          key_value={key_value}
          item={item}
          onPress={v => {
            onPress(v);
          }}
        />
      </View>
    </Pressable>
  );
};

const Node = (props: INodeNodesProps) => {
  let {key_value, item, onPress} = props;
  const {styles} = useStyles();

  return (
    <Pressable
      key={key_value}
      style={styles.node}
      onPress={() => {
        onPress(item);
      }}>
      <Text style={styles.text}>{item.title}</Text>
      <ToogleButton value={item.check ? true : false} />
    </Pressable>
  );
};

const Repeat = (props: IRepeatNodesProps) => {
  let {item, key_value, onPress, onPressNode} = props;
  return (
    <View key={key_value} style={{marginStart: 26}}>
      <Logic
        key_value={key_value}
        item={item}
        onPress={v => {
          onPress(v);
        }}
        onPressNode={v => {
          onPressNode(v);
        }}
      />
    </View>
  );
};

export default React.memo(Filter);

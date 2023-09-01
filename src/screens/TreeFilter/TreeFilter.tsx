import {Pressable, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import Filter from '../../components/Filter';
import LinearGradient from 'react-native-linear-gradient';
import {useFilter} from './Hooks';
import {useCustomTheme} from '../../constants/useCustomTheme';
import useStyles from './styles';

const TreeFilter = () => {
  const {
    realTimeChanges,
    clickOnNodes,
    filter_data,
    checkedNode,
    checkedChilds,
    returnRow,
  } = useFilter();
  const {styles} = useStyles();
  const {colors} = useCustomTheme();

  return (
    <View style={styles.container} testID="tree-filter">
      <Header />

      <View style={styles.filter}>
        <Filter
          key={'test'}
          data={filter_data as Node[]}
          onPress={v => {
            realTimeChanges(v);
          }}
          onPressNode={v => {
            clickOnNodes(v);
          }}
        />
      </View>

      <LinearGradient
        colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.2)']}
        style={styles.selected}
        start={{x: 1, y: 0}}
        end={{x: 0.2, y: 0.9}}>
        {returnRow(
          'tree ids:',
          (checkedChilds as any)?.ids,
          (checkedNode as any)?.id,
        )}
        {returnRow(
          'tree titles:',
          (checkedChilds as any)?.titles,
          (checkedNode as any)?.title,
        )}
      </LinearGradient>

      <LinearGradient
        colors={[colors.secondary, colors.primary]}
        style={styles.apply}
        start={{x: 1, y: 0}}
        end={{x: 0.2, y: 0.9}}>
        <Pressable
          onPress={() => {
            console.log('');
          }}>
          <Text style={styles.text}>{'APPLY'}</Text>
        </Pressable>
      </LinearGradient>
    </View>
  );
};

export default TreeFilter;

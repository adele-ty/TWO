import React from 'react';
import {View, StyleSheet, Text, TouchableHighlight} from 'react-native';
import IconButton from '../../common/IconButton';

export default function Head() {
  return (
    <View style={styles.head}>
      <TouchableHighlight
        onPress={() => console.log('today is ...')}
        activeOpacity={1}>
        <View style={styles.row}>
          <Text style={[styles.text, styles.bigText, styles.bold]}>{'18'}</Text>
          <Text style={[styles.text, styles.bold]}>{'Jul.2023'}</Text>
          <IconButton size={24} name="caret-down" color="black" />
        </View>
      </TouchableHighlight>
      <View style={[styles.row, styles.right]}>
        <Text style={styles.text}>{'苏州'}</Text>
        <Text style={styles.text}>{'阴'}</Text>
        <Text style={styles.text}>{'30°C'}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  head: {
    backgroundColor: 'rgb(255, 255, 255)',
    paddingTop: '6%',
    paddingLeft: '6%',
    display: 'flex',
    flexDirection: 'row',
  },
  bold: {
    fontWeight: 'bold',
    color: 'black',
  },
  right: {
    marginLeft: '40%',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  text: {
    marginRight: 5,
    height: 24,
    lineHeight: 24,
  },
  bigText: {
    fontSize: 24,
  },
});

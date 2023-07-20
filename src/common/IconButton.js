import React from 'react';
import {StyleSheet, Text, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function IconButton(props) {
  const {name, size, color, pressEvent} = props;
  return (
    <TouchableHighlight
      onPress={pressEvent}
      activeOpacity={1}
      style={styles.show}>
      <Icon
        name={name}
        size={size}
        color={color}
        style={{backgroundColor: '#fff'}}>
        {name === 'bandcamp' ? (
          <Text style={styles.textStyle}>{'小记'}</Text>
        ) : (
          <></>
        )}
      </Icon>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  show: {
    backgroundColor: '#fff',
    height: 20,
    flex: 1,
    marginLeft: '6%',
  },

  textStyle: {color: 'rgba(0, 0, 0, .3)', fontSize: 12},
});

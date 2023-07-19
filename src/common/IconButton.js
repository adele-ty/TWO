import React from 'react';
import {StyleSheet, Text, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function IconButton(props) {
  const {name, size, color, pressEvent} = props;
  return (
    <TouchableHighlight
      onPress={pressEvent}
      activeOpacity={1}
      style={styles.iconButton}>
      <Icon name={name} size={size} color={color} style={styles.iconButton}>
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
  iconButton: {
    backgroundColor: '#fff',
    height: 20,
  },
  textStyle: {color: 'rgba(0, 0, 0, .3)', fontSize: 14},
});

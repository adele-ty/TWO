import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function IconButton(props) {
  const {name, size, color, pressEvent, praisenum} = props;
  const getText = () => {
    if (name === 'bandcamp') {
      return <Text style={styles.textStyle}>{'小记'}</Text>;
    } else if (name === 'heart-o') {
      return <Text style={styles.textStyle}>{praisenum}</Text>;
    } else {
      return <></>;
    }
  };
  return (
    <TouchableOpacity
      onPress={pressEvent}
      activeOpacity={1}
      style={styles.show}>
      <Icon
        name={name}
        size={size}
        color={color}
        style={{backgroundColor: '#fff'}}>
        {getText()}
      </Icon>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  show: {
    backgroundColor: '#fff',
  },

  textStyle: {color: 'rgba(0, 0, 0, .3)', fontSize: 12},
});

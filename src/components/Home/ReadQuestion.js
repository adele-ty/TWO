import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import IconButton from '../../common/IconButton';
import commonStyles from '../../style';

export default function Read(props) {
  const {hp_title, guide_word, user_name, hp_img_url, type} = props.detail;
  const {style} = props;
  return (
    <View style={[commonStyles.Container, style]}>
      <Text
        style={[
          commonStyles.center,
          commonStyles.textStyle,
          commonStyles.Spacing,
        ]}>
        {type === 'read' ? '-阅读-' : '-问答-'}
      </Text>
      <Text style={styles.title}>{hp_title}</Text>
      <Text style={[commonStyles.textStyle, styles.username]}>{user_name}</Text>
      <Text style={styles.guideWord}>{guide_word}</Text>
      <Image source={{uri: hp_img_url}} style={styles.img} />
      <View style={styles.userOperate}>
        <IconButton name="heart-o" size={20} color="rgb(166, 166, 166)" />
        <IconButton
          name="share-square-o"
          size={20}
          color="rgb(166, 166, 166)"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  userOperate: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginLeft: '65%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: '2.5%',
  },
  username: {
    marginBottom: '5%',
  },
  guideWord: {
    marginBottom: '2.5%',
  },
  img: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: '5%',
  },
});

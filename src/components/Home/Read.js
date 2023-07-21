import React from 'react';
import {Image, Text, View} from 'react-native';
import IconButton from '../../common/IconButton';
import {commonStyles, ReadQuestionStyles} from '../../style';

export default function Read(props) {
  const hp_img_url = 'http://image.wufazhuce.com/FsiC_qoWyqQsYs4NEzBuz2bewWn0';
  const {hp_title, guide_word, author_list} = props.detail;
  const {style} = props;
  return (
    <View style={[commonStyles.Container, style]}>
      <Text
        style={[
          commonStyles.center,
          commonStyles.textStyle,
          commonStyles.Spacing,
        ]}>
        {'-阅读-'}
      </Text>
      <Text style={ReadQuestionStyles.title}>{hp_title}</Text>
      <Text style={[commonStyles.textStyle, ReadQuestionStyles.username]}>
        {author_list[0].user_name}
      </Text>
      <Text style={ReadQuestionStyles.guideWord}>{guide_word}</Text>
      <Image source={{uri: hp_img_url}} style={ReadQuestionStyles.img} />
      <View style={ReadQuestionStyles.userOperate}>
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

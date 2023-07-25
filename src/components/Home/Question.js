import React from 'react';
import {Image, Text, View} from 'react-native';
import IconButton from '../../common/IconButton';
import {commonStyles, ReadQuestionStyles} from '../../style';

export default function Question(props) {
  const hp_img_url = 'http://image.wufazhuce.com/FvPgCrG8O0FJ0kHzP5Rc5NUGE3NY';
  // const {question_title, answer_content, author_list} = props.detail;
  const {style} = props;
  return (
    <View style={[commonStyles.Container, style]}>
      <Text
        style={[
          commonStyles.center,
          commonStyles.textStyle,
          commonStyles.Spacing,
        ]}>
        {'-问答-'}
      </Text>
      {/* <Text style={ReadQuestionStyles.title}>{question_title}</Text>
      <Text style={[commonStyles.textStyle, ReadQuestionStyles.username]}>
        {author_list[0].user_name}
      </Text>
      <Text style={ReadQuestionStyles.guideWord}>{answer_content}</Text> */}
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

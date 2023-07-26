import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import IconButton from '../../common/IconButton';
import {commonStyles, ReadQuestionStyles} from '../../style';

export default function Question({detail, style, navigation}) {
  const hp_img_url = 'http://image.wufazhuce.com/FvPgCrG8O0FJ0kHzP5Rc5NUGE3NY';
  const {question_title, answer_content, author_list, question_id} = detail;

  const jumpToQuestionDetail = () => {
    navigation.navigate('DetailScreen', {id: question_id, head: '问答'});
  };

  return (
    <TouchableOpacity
      style={[commonStyles.Container, style]}
      onPress={jumpToQuestionDetail}
      activeOpacity={1}>
      <Text style={ReadQuestionStyles.header}>{'-问答-'}</Text>
      <Text style={[ReadQuestionStyles.title, commonStyles.blackTitle]}>
        {question_title}
      </Text>
      <Text style={[commonStyles.textStyle, ReadQuestionStyles.username]}>
        {author_list[0].user_name}
      </Text>
      <Text style={ReadQuestionStyles.guideWord}>{answer_content}</Text>
      <Image source={{uri: hp_img_url}} style={ReadQuestionStyles.img} />
      <View style={ReadQuestionStyles.userOperate}>
        <IconButton name="heart-o" size={20} color="rgb(166, 166, 166)" />
        <IconButton
          name="share-square-o"
          size={20}
          color="rgb(166, 166, 166)"
        />
      </View>
    </TouchableOpacity>
  );
}

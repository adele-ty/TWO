import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import IconButton from '../../common/IconButton';
import {commonStyles, ReadQuestionStyles} from '../../style';

export default function Read({detail, navigation}) {
  const hp_img_url = 'http://image.wufazhuce.com/FsiC_qoWyqQsYs4NEzBuz2bewWn0';
  const {hp_title, guide_word, author_list, content_id} = detail;

  const jumpToEssayDetail = () => {
    navigation.navigate('DetailScreen', {id: content_id, head: '阅读'});
  };

  return (
    <TouchableOpacity
      style={commonStyles.Container}
      onPress={jumpToEssayDetail}
      activeOpacity={1}>
      <Text style={ReadQuestionStyles.header}>{'-阅读-'}</Text>
      <Text style={[ReadQuestionStyles.title, commonStyles.blackTitle]}>
        {hp_title}
      </Text>
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
    </TouchableOpacity>
  );
}

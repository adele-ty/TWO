import React, {useState, useEffect} from 'react';
import {ScrollView, Text, useWindowDimensions} from 'react-native';
import RenderHtml from 'react-native-render-html';
import {commonStyles, detailStyles} from '../../style';
import {getEssayDetail} from '../../data/api';

export default function Essay({id}) {
  const {width} = useWindowDimensions();

  let [essayDetail, setEssayDetail] = useState({});

  useEffect(() => {
    getEssayDetail(id).then(res => {
      const {hp_title, hp_author, hp_content, hp_author_introduce, copyright} =
        res;

      setEssayDetail({
        hp_title,
        hp_author,
        hp_author_introduce,
        copyright,
        hp_content,
      });
    });
  }, [id]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={detailStyles.scrollContainer}>
      <Text style={[detailStyles.title, commonStyles.blackTitle]}>
        {essayDetail.hp_title}
      </Text>
      <Text style={detailStyles.author}>{essayDetail.hp_author}</Text>
      <RenderHtml
        contentWidth={width}
        source={{html: essayDetail.hp_content || '<p></p>'}}
      />
    </ScrollView>
  );
}

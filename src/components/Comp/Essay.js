import React, {useState, useEffect} from 'react';
import {ScrollView, Text, StyleSheet, useWindowDimensions} from 'react-native';
import RenderHtml from 'react-native-render-html';
import {commonStyles} from '../../style';
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
      style={styles.scrollContainer}>
      <Text style={[styles.title, commonStyles.blackTitle]}>
        {essayDetail.hp_title}
      </Text>
      <Text style={styles.author}>{essayDetail.hp_author}</Text>
      <RenderHtml
        contentWidth={width}
        source={{html: essayDetail.hp_content}}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: '5%',
    marginBottom: '10%',
  },
  title: {
    fontSize: 22,
  },
  author: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, .6)',
    marginVertical: '10%',
  },
});

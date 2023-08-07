import React, {useEffect, useState} from 'react';
import {Text, ScrollView, StyleSheet, useWindowDimensions} from 'react-native';
import RenderHtml from 'react-native-render-html';
import {commonStyles} from '../../style';
import {getQuestionDetail} from '../../data/api';

export default function Question({id}) {
  const {width} = useWindowDimensions();

  let [questionDetail, setQuestionDetail] = useState({});

  useEffect(() => {
    getQuestionDetail(id).then(res => {
      const {
        question_title,
        asker: {user_name: asker_name},
        question_content,
        answerer: {user_name: answer_name},
        answer_content,
        charge_edt,
        copyright,
      } = res;

      setQuestionDetail({
        question_title,
        asker_name,
        question_content,
        answer_name,
        answer_content,
        charge_edt,
        copyright,
      });
    });
  }, [id]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.scrollContainer}>
      <Text style={[styles.title, commonStyles.blackTitle]}>
        {questionDetail.question_title}
      </Text>
      <Text style={styles.author}>{questionDetail.asker_name}问:</Text>
      <Text style={styles.question}>{questionDetail.question_content}</Text>
      <Text style={styles.author}>{questionDetail.answer_name}答:</Text>
      <RenderHtml
        contentWidth={width}
        source={{html: questionDetail.answer_content || '<p></p>'}}
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
    marginVertical: '5%',
  },
  question: {
    fontSize: 16,
    fontWeight: '500',
    color: 'rgba(0, 0, 0, .6)',
  },
});

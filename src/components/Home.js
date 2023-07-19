import {Text, View, FlatList, StyleSheet} from 'react-native';
import {useEffect, useState} from 'react';
import Cover from './Home/Cover';
import Read from './Home/Read';
import Question from './Home/Question';
import Radio from './Home/Radio';

export default function Index() {
  const oneDayData = [
    {
      hp_author: '插画＆Edvard Munch 作品',
      hp_content:
        '友谊的本质就是不断地交换：交换信息，交换情感，交换时间，以及更重要的——交换秘密。 from 傅真《斑马》',
      hp_img_original_url:
        'http://image.wufazhuce.com/FurIVzSk4yhJM6lLKIUUdWGGydSy',
      hp_img_url: 'http://image.wufazhuce.com/FurIVzSk4yhJM6lLKIUUdWGGydSy',
      hp_makettime: '2023-07-19 06:00:00',
      hp_title: 'VOL.3938',
      hpcontent_id: '4054',
      image_authors: 'Edvard Munch',
      text_authors: '傅真《斑马》',
    },
    {
      hpcontent_id: '4054',
      image_authors: 'Edvard Munch',
      text_authors: '傅真《斑马》',
    },
  ];

  return (
    <View style={styles.listContainer}>
      <Cover detail={oneDayData[0]} />
      <Read detail={oneDayData[1]} />
      <Question detail={oneDayData[2]} />
      <Radio detail={oneDayData[3]} />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    marginTop: '20%',
  },
});

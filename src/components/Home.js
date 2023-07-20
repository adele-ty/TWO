import {View, ScrollView, StyleSheet, Text} from 'react-native';
import Cover from './Home/Cover';
import ReadQuestion from './Home/ReadQuestion';
import commonStyles from '../style';
import Head from './Home/Head';

export default function Home() {
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
      content_id: '4054',
      image_authors: 'Edvard Munch',
      text_authors: '傅真《斑马》',
      type: 'cover',
    },
    {
      type: 'read',
      content_id: '6018',
      hp_title: '父与子',
      hp_makettime: '2023-07-20 06:00:00',
      guide_word: '你要求一个生活窘迫的人去保持善意是不现实的。',
      user_name: '陈功',
      hp_img_url: 'http://image.wufazhuce.com/FkOWIEvpkxmsdXdPlT4Z-Zeke9oc',
    },
    {
      type: 'question',
      content_id: '6019',
      hp_title: '父与子',
      hp_makettime: '2023-07-20 06:00:00',
      guide_word: '你要求一个生活窘迫的人去保持善意是不现实的。',
      user_name: '陈功',
      hp_img_url: 'http://image.wufazhuce.com/FkOWIEvpkxmsdXdPlT4Z-Zeke9oc',
    },
  ];

  return (
    <View style={styles.listContainer}>
      <Head />
      <ScrollView>
        <Cover detail={oneDayData[0]} />
        <ReadQuestion detail={oneDayData[1]} />
        <ReadQuestion detail={oneDayData[2]} style={styles.question} />
        <Text
          style={[
            commonStyles.center,
            commonStyles.textStyle,
            styles.checkPrevious,
          ]}>
          {'<< 滑动查看上一个'}
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
  checkPrevious: {
    backgroundColor: 'rgb(252, 252, 252)',
    height: '10%',
    paddingTop: '10%',
  },
  question: {
    marginBottom: 0,
  },
});

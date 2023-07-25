import React, {useState, useEffect} from 'react';
import {
  Text,
  useWindowDimensions,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import RenderHtml from 'react-native-render-html';
import IconButton from '../../common/IconButton';
import {getEssayDetail} from '../../data/api';

export default function EssayDetail({navigation, route}) {
  const {width} = useWindowDimensions();
  let [essayDetail, setEssayDetail] = useState({});

  useEffect(() => {
    getEssayDetail(route.params).then(res => {
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
  }, [route.name]);

  const goBack = () => {
    navigation.pop(1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.topBar}>
          <IconButton
            name="angle-left"
            size={25}
            color="rgb(176, 176, 176)"
            pressEvent={goBack}
          />
          <Text style={styles.tabLabel}>阅读</Text>
          <IconButton
            name="bookmark-o"
            size={25}
            color="rgb(176, 176, 176)"
            pressEvent={() => console.log('book mark')}
          />
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}>
        <Text style={styles.title}>{essayDetail.hp_title}</Text>
        <Text style={styles.author}>{essayDetail.hp_author}</Text>
        <RenderHtml
          contentWidth={width}
          source={{html: essayDetail.hp_content}}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(252, 252, 252)',
    fontFamily: 'STSong',
  },
  topBar: {
    marginHorizontal: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '100%',
    paddingTop: '3%',
  },
  box: {
    width: '100%',
    height: '7%',
    elevation: 0.3,
  },
  tabLabel: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'rgba(0, 0, 0, .7)',
  },
  scrollContainer: {
    paddingHorizontal: '5%',
    marginBottom: '10%',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, .8)',
  },
  author: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, .6)',
    marginVertical: '10%',
  },
});

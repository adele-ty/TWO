import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import IconButton from '../../common/IconButton';
import Question from './Question';
import Essay from './Essay';
import BookMovie from './BookMovie';

export default function EssayDetail({navigation, route}) {
  const {id, head} = route.params;
  const goBack = () => {
    navigation.pop(1);
  };

  const getScreen = () => {
    if (head === '阅读') return <Essay id={id} />;
    if (head === '问答') return <Question id={id} />;
    if (head === '书影') return <BookMovie id={id} />;
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
          <Text style={styles.tabLabel}>{head !== '书影' ? head : ''}</Text>
          <IconButton
            name="bookmark-o"
            size={25}
            color="rgb(176, 176, 176)"
            pressEvent={() => console.log('book mark')}
          />
        </View>
      </View>
      {getScreen()}
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
  },
  author: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, .6)',
    marginVertical: '10%',
  },
});

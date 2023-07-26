import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import IconButton from '../../common/IconButton';
import CoverModal from '../Comp/CoverModal';
import {commonStyles} from '../../style';

export default function Cover({detail}) {
  const {hp_img_url, hp_author, hp_content, text_authors, hp_title, praisenum} =
    detail;
  const [modalVisible, setModalVisible] = useState(false);
  const [markColor, setMarkColor] = useState('rgb(166, 166, 166)');
  const [heart, setHeart] = useState(praisenum);
  const [heartColor, setHeartColor] = useState('rgb(166, 166, 166)');

  const openModal = () => {
    setModalVisible(true);
  };

  const clickMark = () => {
    if (markColor === 'rgb(166, 166, 166)') setMarkColor('rgb(255, 205, 104)');
    if (markColor === 'rgb(255, 205, 104)') setMarkColor('rgb(166, 166, 166)');
  };

  const clickHeart = () => {
    setHeartColor('rgb(254, 84, 85)');
    setHeart(heart + 1);
  };

  return (
    <View style={commonStyles.Container}>
      <CoverModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        data={{hp_title, hp_img_url, hp_author}}
      />
      <View style={styles.cardContainer}>
        <TouchableOpacity activeOpacity={1} onPress={openModal}>
          <Image source={{uri: hp_img_url}} style={styles.img} />
        </TouchableOpacity>
        <Text
          style={[commonStyles.center, commonStyles.textStyle, styles.margin]}>
          {hp_author}
        </Text>
        <Text style={styles.mainWord}>{hp_content}</Text>
        <Text style={[commonStyles.center, commonStyles.textStyle]}>
          {text_authors}
        </Text>
      </View>
      <View style={styles.userOperate}>
        <IconButton
          name="bandcamp"
          size={20}
          color="black"
          pressEvent={() => console.log('pencil')}
        />
        <IconButton name="pencil" size={20} color="rgb(166, 166, 166)" />
        <IconButton
          name="bookmark-o"
          size={20}
          color={markColor}
          pressEvent={clickMark}
        />
        <IconButton
          name="heart-o"
          size={20}
          color={heartColor}
          praisenum={heart}
          pressEvent={clickHeart}
        />
        <IconButton
          name="share-square-o"
          size={20}
          color="rgb(166, 166, 166)"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, .1)',
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, .8)',
    shadowOffset: {
      width: 20,
      height: 20,
    },
    overflow: 'hidden',
    marginBottom: '5%',
    paddingBottom: '10%',
  },
  img: {
    width: '100%',
    height: 200,
    marginBottom: '2.5%',
  },
  mainWord: {
    marginBottom: '12.5%',
    width: '80%',
    marginHorizontal: '10%',
    fontSize: 16,
    fontFamily: 'sans-serif',
  },
  userOperate: {
    display: 'flex',
    flexDirection: 'row',
    width: '95%',
    marginHorizontal: '2%',
    justifyContent: 'space-between',
  },
  margin: {
    marginBottom: '8%',
  },
});

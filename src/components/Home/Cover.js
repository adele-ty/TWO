import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import IconButton from '../../common/IconButton';
import {commonStyles} from '../../style';

export default function Cover(props) {
  // const {hp_img_url, hp_author, hp_content, text_authors} = props.detail;
  return (
    <View style={commonStyles.Container}>
      <View style={styles.cardContainer}>
        {/* <Image source={{uri: hp_img_url}} style={styles.img} />
        <Text style={[commonStyles.center, commonStyles.textStyle]}>
          {hp_author}
        </Text>
        <Text style={styles.mainWord}>{hp_content}</Text>
        <Text style={[commonStyles.center, commonStyles.textStyle]}>
          {text_authors}
        </Text> */}
      </View>
      <View style={styles.userOperate}>
        <IconButton
          name="bandcamp"
          size={20}
          color="black"
          pressEvent={() => console.log('pencil')}
        />
        <IconButton name="pencil" size={20} color="rgb(166, 166, 166)" />
        <IconButton name="bookmark-o" size={20} color="rgb(166, 166, 166)" />
        <IconButton name="heart-o" size={20} color="rgb(166, 166, 166)" />
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
    justifyContent: 'space-around',
  },
});

import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  Text,
  useWindowDimensions,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import RenderHtml from 'react-native-render-html';
import {commonStyles, detailStyles} from '../../style';
import {getMusicDetail} from '../../data/api';
import Player from '../../common/Player';

export default function Music({id}) {
  const {width} = useWindowDimensions();
  let [musicDetail, setMusicDetail] = useState({});

  useEffect(() => {
    getMusicDetail(id).then(res => {
      const {
        feeds_cover,
        cover,
        music_id,
        title,
        author: {user_name: author_name},
        album,
        story_title,
        story_author: {user_name: story_author_name},
        story,
        charge_edt,
        copyright,
      } = res;

      setMusicDetail({
        feeds_cover,
        cover,
        music_id,
        title,
        author_name,
        album,
        story_title,
        story_author_name,
        story,
        charge_edt,
        copyright,
      });
    });
  }, [id]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={detailStyles.scrollContainer}
      contentContainerStyle={{paddingBottom: 100}}>
      <View style={styles.topContainer}>
        <Image
          source={{uri: musicDetail.feeds_cover}}
          style={styles.background}
        />
        <TouchableOpacity activeOpacity={1} style={styles.player}>
          <Image source={{uri: musicDetail.cover}} style={styles.image} />
          <Player url={musicDetail.music_id} />
        </TouchableOpacity>
        <Text
          style={[
            detailStyles.author,
            commonStyles.center,
            styles.musicTitle,
          ]}>{`${musicDetail.title}|${musicDetail.author_name}|${musicDetail.album}`}</Text>
      </View>
      <Text style={[detailStyles.title, commonStyles.blackTitle]}>
        {musicDetail.story_title}
      </Text>
      <Text style={detailStyles.author}>
        文/{musicDetail.story_author_name}
      </Text>
      <RenderHtml contentWidth={width} source={{html: musicDetail.story}} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    marginBottom: '8%',
    width: '100%',
    height: '6%',
    position: 'relative',
  },
  background: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  player: {
    width: '30%',
    height: '45%',
    marginHorizontal: '33%',
    marginTop: '10%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 0,
  },
  musicTitle: {
    color: 'white',
  },
});

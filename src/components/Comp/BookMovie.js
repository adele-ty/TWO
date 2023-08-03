import React, {useEffect, useState} from 'react';
import {Text, useWindowDimensions, ScrollView} from 'react-native';
import RenderHtml from 'react-native-render-html';
import {getBookMovieDetail} from '../../data/api';
import {commonStyles, detailStyles} from '../../style';

export default function BookMovie({id}) {
  const {width} = useWindowDimensions();

  let [bookMovieDetail, setBookMovieDetail] = useState({});
  useEffect(() => {
    getBookMovieDetail(id).then(res => {
      console.log(res);
      const {
        title,
        user: {user_name},
        content,
        charge_edt,
        editor_email,
        copyright,
      } = res;
      setBookMovieDetail({
        title,
        user_name,
        content,
        charge_edt,
        editor_email,
        copyright,
      });
    });
  }, [id]);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={detailStyles.scrollContainer}>
      <Text style={[detailStyles.title, commonStyles.blackTitle]}>
        {bookMovieDetail.title}
      </Text>
      <Text style={detailStyles.author}>文/{bookMovieDetail.user_name}</Text>
      <RenderHtml
        contentWidth={width}
        source={{html: bookMovieDetail.content}}
      />
    </ScrollView>
  );
}

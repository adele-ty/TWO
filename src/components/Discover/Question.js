import React, {useEffect, useState} from 'react';
import {Text, SectionList, View, Image, TouchableOpacity} from 'react-native';
import {getQuestion} from '../../data/api';
import {commonStyles, sectionList} from '../../style';

export default function Read({navigation}) {
  let [listData, setListData] = useState([]);

  const fetchData = () => {
    const newData = {title: '07月', data: [...listData[0].data]};
    setListData([...listData, {...newData}]);
  };

  useEffect(() => {
    getQuestion().then(res => {
      setListData([{title: '08月', data: [...res]}]);
    });
  }, []);

  const Item = ({item}) => {
    const img_url = 'http://image.wufazhuce.com/FhoRM87AiS1TRfD0o1KRSmWLXNiG';
    return (
      <View>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() =>
            navigation.navigate('DetailScreen', {
              id: item.question_id,
              head: '问答',
            })
          }>
          <View style={sectionList.itemStyle}>
            <Image source={{uri: img_url}} style={sectionList.littleImg} />
            <View style={sectionList.titleContainer}>
              <Text
                style={sectionList.title}
                numberOfLines={1}
                ellipsizeMode="tail">
                {item.question_title}
              </Text>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={sectionList.littleTitle}>
                {item.answer_content}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={sectionList.listContainer}>
      <SectionList
        showsVerticalScrollIndicator={false}
        refreshing={true}
        onEndReachedThreshold={0.1}
        onEndReached={() => fetchData()}
        sections={listData}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <Item item={item} />}
        renderSectionHeader={({section: {title}}) => (
          <Text style={commonStyles.center}>{`-${title}-`}</Text>
        )}
      />
    </View>
  );
}

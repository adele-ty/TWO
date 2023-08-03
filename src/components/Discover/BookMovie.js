import React, {useState, useEffect} from 'react';
import {Text, View, SectionList, TouchableOpacity, Image} from 'react-native';
import {commonStyles, sectionList} from '../../style';
import {getBookMovie} from '../../data/api';

export default function BookMovie({navigation}) {
  let [listData, setListData] = useState([]);

  useEffect(() => {
    getBookMovie().then(res => {
      setListData([...res]);
    });
  }, []);

  const Item = ({item}) => {
    const {cover, subtitle, title, id} = item;
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => navigation.navigate('DetailScreen', {id, head: '书影'})}>
        <View style={sectionList.itemStyle}>
          <Image source={{uri: cover}} style={sectionList.littleImg} />
          <View style={sectionList.titleContainer}>
            <Text
              style={sectionList.title}
              numberOfLines={1}
              ellipsizeMode="tail">
              {subtitle}
            </Text>
            <Text style={sectionList.littleTitle}>《{title}》</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={sectionList.listContainer}>
      <SectionList
        showsVerticalScrollIndicator={false}
        refreshing={true}
        onEndReachedThreshold={0.1}
        sections={listData}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Item item={item} />}
        renderSectionHeader={({section: {date}}) => (
          <Text style={[commonStyles.center, SectionList.littleTitle]}>
            {date}
          </Text>
        )}
      />
    </View>
  );
}

import React, {useEffect, useState} from 'react';
import {Text, SectionList, View, Image, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getReadEssay} from '../../data/api';
import {initReadList} from '../../data/Redux/Read';
import {commonStyles, sectionList} from '../../style';

export default function Read({navigation}) {
  const dispatch = useDispatch();
  const readList = useSelector(state => state.read.value);
  let [listData, setListData] = useState([]);
  const newData = {title: '6月', data: [...readList]};

  const fetchData = () => {
    setListData([...listData, {...newData}]);
  };

  useEffect(() => {
    getReadEssay().then(res => {
      dispatch(initReadList(res));
      setListData([{title: '7月', data: [...res]}]);
    });
  }, []);

  const Item = ({item}) => {
    const img_url = 'http://image.wufazhuce.com/Fvb01YqFsw3C2qmU_r5Kkeewk3z1';
    return (
      <View>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() =>
            navigation.navigate('DetailScreen', {
              id: item.content_id,
              head: '阅读',
            })
          }>
          <View style={sectionList.itemStyle}>
            <Image source={{uri: img_url}} style={sectionList.littleImg} />
            <View style={sectionList.titleContainer}>
              <Text style={sectionList.title}>{item.hp_title}</Text>
              <Text>{item.author[0].user_name}</Text>
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

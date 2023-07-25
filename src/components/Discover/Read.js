import React, {useEffect, useState} from 'react';
import {
  Text,
  SectionList,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getReadEssay} from '../../data/api';
import {initReadList} from '../../data/Redux/Read';
import {commonStyles} from '../../style';

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
    });

    setListData([{title: '7月', data: [...readList]}]);
  }, []);

  const Item = ({item}) => {
    const img_url = 'http://image.wufazhuce.com/Fvb01YqFsw3C2qmU_r5Kkeewk3z1';
    return (
      <View>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.navigate('DetailScreen', item.content_id)}>
          <View style={styles.itemStyle}>
            <Image source={{uri: img_url}} style={styles.img} />
            <View>
              <Text style={styles.title}>{item.hp_title}</Text>
              <Text style={styles.text}>{item.author[0].user_name}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.listContainer}>
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

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: '#fff',
    padding: '7%',
    paddingTop: '2%',
  },
  itemStyle: {
    flexDirection: 'row',
    marginTop: '7%',
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: '5%',
  },
  title: {
    color: 'rgba(0, 0, 0, .7)',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: '10%',
  },
});

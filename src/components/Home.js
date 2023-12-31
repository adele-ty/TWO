import {View, ScrollView, StyleSheet, Text} from 'react-native';
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import Cover from './Home/Cover';
import Read from './Home/Read';
import Question from './Home/Question';
import {commonStyles} from '../style';
import Head from './Home/Head';
import {initList} from '../data/Redux/todayContent';
import {getTodayData} from '../data/api';

export default function Home({navigation}) {
  const dispatch = useDispatch();
  let [todayData, setTodayData] = useState([]);

  useEffect(() => {
    getTodayData().then(res => {
      dispatch(initList(res));
      setTodayData([...res]);
    });
  }, []);

  return (
    <View style={styles.listContainer}>
      <Head />
      <ScrollView>
        <Cover detail={todayData[0]} />
        <Read detail={todayData[1]} navigation={navigation} />
        <Question
          detail={todayData[2]}
          style={styles.question}
          navigation={navigation}
        />
        <Text
          style={[
            commonStyles.center,
            commonStyles.textStyle,
            styles.checkPrevious,
          ]}>
          {'<< 滑动查看上一个'}
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
  checkPrevious: {
    backgroundColor: 'rgb(252, 252, 252)',
    height: '10%',
    paddingVertical: '15%',
  },
  question: {
    marginBottom: 0,
  },
});

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {StyleSheet} from 'react-native';
import Read from './Discover/Read';
import DateStamp from './Discover/DateStamp';
import Question from './Discover/Question';
import BookMovie from './Discover/BookMovie';
import Music from './Discover/Music';

export default function Discover() {
  const Tab = createMaterialTopTabNavigator();
  const options = {
    tabBarStyle: styles.tabBar,
    tabBarIndicatorStyle: styles.tabItemActive,
    tabBarLabelStyle: styles.label,
  };

  return (
    <Tab.Navigator screenOptions={options}>
      <Tab.Screen name="阅读" component={Read} />
      <Tab.Screen name="日签" component={DateStamp} />
      <Tab.Screen name="问答" component={Question} />
      <Tab.Screen name="书影" component={BookMovie} />
      <Tab.Screen name="音乐" component={Music} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    elevation: 0,
  },
  tabItemActive: {
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
  },
});

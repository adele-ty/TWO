import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Provider} from 'react-redux';

import Home from './components/Home';
import Discover from './components/Discover';
import Radio from './components/Radio';
import My from './components/My';
import store from './data/Redux/store';

export default function App() {
  const Tab = createBottomTabNavigator();
  let IconName = '';
  const options = ({route}) => ({
    tabBarIcon: ({size, focused}) => {
      switch (route.name) {
        case '首页':
          IconName = 'circle-o';
          break;
        case '发现':
          IconName = 'th-large';
          break;
        case '收音机':
          IconName = 'youtube-play';
          break;
        case '我的':
          IconName = 'user-o';
          break;
      }
      let color = focused ? 'rgb(51, 51, 51)' : 'gray';
      return <Icon name={IconName} size={size} color={color} />;
    },
    headerShown: false,
    tabBarActiveTintColor: 'rgb(51, 51, 51)',
    tabBarInactiveTintColor: 'gray',
    tabBarStyle: styles.tabBarStyle,
    tabBarItemStyle: styles.tabBarItemStyle,
  });

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={options}>
          <Tab.Screen name="首页" component={Home} />
          <Tab.Screen name="发现" component={Discover} />
          <Tab.Screen name="收音机" component={Radio} />
          <Tab.Screen name="我的" component={My} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
const styles = StyleSheet.create({
  tabBarStyle: {
    height: '10%',
    width: '100%',
    borderTopWidth: 0,
  },
  tabBarItemStyle: {
    height: '70%',
  },
});

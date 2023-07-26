import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Provider} from 'react-redux';

import Home from './components/Home';
import Discover from './components/Discover';
import Radio from './components/Radio';
import My from './components/My';
import store from './data/Redux/store';
import Detail from './components/Comp/Detail';

function BottomNavigator() {
  const Tab = createBottomTabNavigator();
  let IconName = '';
  const options = ({route}) => ({
    tabBarIcon: ({size, focused}) => {
      switch (route.name) {
        case 'Home':
          IconName = 'circle-o';
          break;
        case 'Discover':
          IconName = 'th-large';
          break;
        case 'Radio':
          IconName = 'youtube-play';
          break;
        case 'My':
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
    tabBarLabel: () => {
      switch (route.name) {
        case 'Home':
          return <Text>首页</Text>;
        case 'Discover':
          return <Text>发现</Text>;
        case 'Radio':
          return <Text>收音机</Text>;
        case 'My':
          return <Text>我的</Text>;
      }
    },
  });

  return (
    <Tab.Navigator screenOptions={options}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Discover" component={Discover} />
      <Tab.Screen name="Radio" component={Radio} />
      <Tab.Screen name="My" component={My} />
    </Tab.Navigator>
  );
}

export default function App() {
  const ScreenStack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ScreenStack.Navigator screenOptions={{header: () => <></>}}>
          <ScreenStack.Screen name="IndexScreen" component={BottomNavigator} />
          <ScreenStack.Screen name="DetailScreen" component={Detail} />
        </ScreenStack.Navigator>
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

import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Index from './components/Index';
import Discover from './components/Discover';
import Radio from './components/Radio';
import My from './components/My';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="首页" component={Index} />
        <Tab.Screen name="发现" component={Discover} />
        <Tab.Screen name="收音机" component={Radio} />
        <Tab.Screen name="我的" component={My} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({});

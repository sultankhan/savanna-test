import 'react-native-gesture-handler';
import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Checkins from '../screens/checkins';
import Submit from '../screens/submit';

const Tab = createMaterialTopTabNavigator();

export default TabStack = () => {
    return (
      <Tab.Navigator
        initialRouteName="Submit"
        screenOptions={{
          activeTintColor: '#444',
          inactiveTintColor: '#fff',
          style: {
            backgroundColor: '#444',
          },
          labelStyle: {
            textAlign: 'center',
          },
          tabBarIndicatorStyle: {
              backgroundColor: '#444',
          },
        }}>
        <Tab.Screen
            name="Submit"
            component={Submit}
            options={{
                tabBarLabel: 'Submit',
            }} />
        <Tab.Screen
            name="Checkins"
            component={Checkins}
            options={{
                tabBarLabel: 'Checkins',
            }} />
      </Tab.Navigator>
    );
  }
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Feather';
import Notifications from '../Notfications';
import Explorer from '../Explore';
const Tab = createBottomTabNavigator();

const TabRoutes: React.FC = () => (
  <Tab.Navigator
    tabBarOptions={{
      labelPosition: 'beside-icon',
      activeTintColor: '#C72828',
      labelStyle: {
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        fontWeight: '600',
      },
      inactiveTintColor: '#B7B7CC',
    }}>
    <Tab.Screen
      options={{
        tabBarIcon: ({color}) => <Icon size={25} name="list" color={color} />,
        title: 'Listagem',
      }}
      name="DashboardStack"
      component={Notifications}
    />
    <Tab.Screen
      name="Orders"
      options={{
        tabBarIcon: ({color}) => (
          <Icon size={25} name="shopping-bag" color={color} />
        ),
        title: 'Pedidos',
      }}
      component={Explorer}
    />
  </Tab.Navigator>
);

export default TabRoutes;

// import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Explorer from './src/Explore';
import Home from './src/Home';
import Notifications from './src/Notfications';

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Sobre" component={Explorer} />
        <Tab.Screen name="Contato" component={Notifications} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { HomeIcon, AddIcon, ProfileIcon } from './assets/icons';
import {HomeView} from './Views/HomeScreen/HomeView';  // Importing HomeView.js
import TemplateView from './Views/TemplateScreen/TemplateView';

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }: { route: { name: string } }): BottomTabNavigationOptions => ({
          tabBarIcon: () => {
            let IconComponent: React.ComponentType | null = null;

            if (route.name === 'Home') {
              IconComponent = HomeIcon;
            } else if (route.name === 'Add') {
              IconComponent = AddIcon;
            } else if (route.name === 'Profile') {
              IconComponent = ProfileIcon;
            }

            // Ensure the returned component is of the correct type
            return IconComponent ? <IconComponent /> : null;
          },
          tabBarActiveTintColor: '#ff0000',
          tabBarInactiveTintColor: '#EDEDED',
          tabBarStyle: {
            backgroundColor: '#141414',
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeView} />
        <Tab.Screen name="Add" component={TemplateView} />
        <Tab.Screen name="Profile" component={TemplateView} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

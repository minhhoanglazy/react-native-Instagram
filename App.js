import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import ExploreScreen from './screens/ExploreScreen';
import PostScreen from './screens/PostScreen';
import PeopleScreen from './screens/PeopleScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ChatScreen = () => <Text>PLACEHOLDER TEXT :)</Text>;

const ExploreStack = () => {
  return (
    <Stack.Navigator initialRouteName="Explore" screenOptions={{
      headerTitleAlign: 'center',
    }}>
      <Stack.Screen name="Explore" component={ExploreScreen} />
      <Stack.Screen 
        name="Post" 
        component={PostScreen} 
        options={({ navigation }) => ({
          title: 'Post',
          headerBackTitleVisible: true,
        })}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitleAlign: 'center',
          headerShown: true,
        }}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
          showLabel: false,
        }}>
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ 
            headerTitle: 'Instagram',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name="Explore" 
          component={ExploreStack} 
          options={{ 
            tabBarBadge: 5,
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="search-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name="Messages" 
          component={ChatScreen} 
          options={{ 
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="chatbubble-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name="People" 
          component={PeopleScreen} 
          options={{ 
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="people-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{ 
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-outline" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

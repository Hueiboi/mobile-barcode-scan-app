import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import ScanScreen from '../screens/ScanScreen';
import PaymentScreen from '../screens/PaymentScreen'
import SuccessScreen from '../screens/SuccessScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
      headerShown: false,
          tabBarShowLabel: false, 
          tabBarIconStyle: {
            justifyContent: 'center',
            alignItems: 'center',
          },
          tabBarStyle: {
            height: 100,
            paddingBottom: 0,
            alignItems: 'center', // Căn giữa tất cả các item theo chiều dọc
            justifyContent: 'center', // Căn giữa theo chiều ngang
            borderTopLeftRadius: 30, 
            borderTopRightRadius: 30, 
            backgroundColor: '#FFFFFF',
            position: 'absolute', 
            bottom: 0,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: -4 },
            shadowOpacity: 0.1,
            shadowRadius: 10,
            elevation: 10,
        } 
    }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} // Đây chính là giao diện chính của Hiếu
        options={{
          tabBarIcon: ({ focused }) => (
            <Image 
              source={require('../assets/Group 152.png')} 
              style={{ tintColor: focused ? '#1a9df0' : '#D1D1D1' }} 
            />
          )
        }}
      />
      <Tab.Screen 
        name="Notifications"
        component={SuccessScreen} 
        options={{
        tabBarStyle: { display: 'none' }, // Ẩn tab
        tabBarIcon: ({ focused }) => (
            <Image 
              source={require('../assets/Group 153.png')} 
              style={{ tintColor: focused ? '#1dd232' : '#D1D1D1' }} 
            />
          )
        }}
      />
      <Tab.Screen 
        name="Scan" 
        component={ScanScreen} 
        options={{
        tabBarStyle: { display: 'none' }, 
        tabBarIcon: ({ focused }) => (
            <Image 
              source={require('../assets/Vector.png')} 
              style={{ tintColor: focused ? '#5C61F4' : '#D1D1D1' }} 
            />
          )
        }}
      />
      <Tab.Screen 
        name="Success" 
        component={PaymentScreen} 
        options={{
        tabBarStyle: { display: 'none' },
        tabBarIcon: ({ focused }) => (
            <Image 
              source={require('../assets/Group 154.png')} 
              style={{ tintColor: focused ? '#5C61F4' : '#D1D1D1' }} 
            />
          )
        }}
      />
      <Tab.Screen 
        name="Cart" 
        component={CartScreen} 
        options={{
          tabBarIcon: ({ focused }) => (
            <Image 
              source={require('../assets/Group 161.png')} 
              style={{ tintColor: focused ? '#f4a55c' : '#D1D1D1' }} 
            />
          )
        }}
      />
    </Tab.Navigator>
  );
}
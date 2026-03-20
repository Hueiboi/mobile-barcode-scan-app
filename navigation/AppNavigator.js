import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Import các màn hình từ folder screens  
import ScanScreen from '../screens/ScanScreen';
import PaymentScreen from '../screens/PaymentScreen';
import SuccessScreen from '../screens/SuccessScreen';
import BottomTabNavigation from './BottomTabNavigator';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerShown: false, // Tắt cái thanh header mặc định của thư viện
        }}
      >
        <Stack.Screen name="Home" component={BottomTabNavigation} />
        <Stack.Screen name="Scan" component={ScanScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="Success" component={SuccessScreen} />
      </Stack.Navigator>
  );
}
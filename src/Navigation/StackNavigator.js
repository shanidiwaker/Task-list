import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home/home';

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {

    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} options={{ gestureEnabled: false }} />
        </Stack.Navigator>

    )
}

export default StackNavigator;

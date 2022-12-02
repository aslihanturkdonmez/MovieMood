import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, MovieDetail } from './screens';

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown:false,
                }}
            >
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='MovieDetail' component={MovieDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;
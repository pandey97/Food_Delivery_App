import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OnBoardingViewModel } from "../viewModel";

const Stack = createNativeStackNavigator();

const RouteContainer = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="OnBoarding" component={OnBoardingViewModel} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default RouteContainer;
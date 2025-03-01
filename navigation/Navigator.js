import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons';
import AddLocationScreen from '../screens/AddLocationScreen.js';
import LocationsListScreen from '../screens/LocationsListScreen.js';
import MapScreen from '../screens/MapScreen.js';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const LIST = "LIST";
const ADD = "ADD";
const MAP = "MAP";

const icons = {
    [LIST]: "bars", 
    [ADD]: "plus",  
    [MAP]: "enviroment",    
};

const LocationsStack = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Stack.Navigator>
                <Stack.Screen 
                    name="LocationsList" 
                    component={LocationsListScreen} 
                    options={{ title: "Locations" }}
                />
                <Stack.Screen 
                    name="MapScreen" 
                    component={MapScreen} 
                    options={{ title: "Map View" }}
                />
                <Stack.Screen 
                    name="AddLocation" 
                    component={AddLocationScreen} 
                    options={{ title: "Add Location" }}
                />
            </Stack.Navigator>
        </SafeAreaView>
    );
};

const Navigator = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}> 
            <Tab.Navigator>
                <Tab.Screen 
                    name="Locations" 
                    component={LocationsStack} 
                    options={{
                        headerShown: false,
                        tabBarIcon: () => <AntDesign name={icons[LIST]} size={24} />
                    }}
                />
                <Tab.Screen
                    name="Add Location" 
                    component={AddLocationScreen}
                    options={{
                        tabBarIcon: () => <AntDesign name={icons[ADD]} size={24} />
                    }}
                />
                <Tab.Screen 
                    name="Map" 
                    component={MapScreen} 
                    options={{
                        tabBarIcon: () => <AntDesign name={icons[MAP]} size={24} />
                    }}
                />
            </Tab.Navigator>
        </SafeAreaView>
    );
};

export default Navigator;

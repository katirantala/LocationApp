import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import AddLocationScreen from '../screens/AddLocationScreen.js';
import LocationsListScreen from '../screens/LocationsListScreen.js';
import MapScreen from '../screens/MapScreen.js';

const Tab = createBottomTabNavigator();

const LIST = "LIST";
const ADD = "ADD";
const MAP = "MAP";

const icons = {
    [LIST]: "bars", 
    [ADD]: "plus",  
    [MAP]: "enviroment",    
}

const Navigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="Locations" 
                component={LocationsListScreen} 
                options={{
                    tabBarIcon: () => <AntDesign name={icons[LIST]} size={24} />
                }}
            />
            <Tab.Screen
                name="AddLocation" 
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
    );
};

export default Navigator;

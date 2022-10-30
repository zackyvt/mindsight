import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Boarding from "./screens/Boarding";

import CreateProfile from "./screens/auth/CreateProfile";
import Login from "./screens/auth/Login";

import Home from "./screens/Home";
import Profile from "./screens/Profile";

const Tab = createBottomTabNavigator();

function Main() {
    return (
	<Tab.Navigator>
	    <Tab.Screen name="Home" component={Home} 
		options={{
		  title: 'Home',
		  headerStyle: {
		    backgroundColor: '#FFFFFF',
		    shadowColor: '#171717',
		    borderStyle: 'solid',
		  },
		  headerTitleStyle: {
		  },
		}}/>
	    <Tab.Screen name="Profile" component={Profile}/>
	</Tab.Navigator>
    )
}

const Stack = createNativeStackNavigator();

function App() {
    return (
	<NavigationContainer>
	    <Stack.Navigator>
		<Stack.Screen name="Boarding" component={Boarding} options={{
		    headerShown: false
		}}/>
		<Stack.Screen name="Login" component={Login}/>
		<Stack.Screen name="Create Profile" component={CreateProfile}/>
		<Stack.Screen name="Main" component={Main} options={{
		    headerShown: false,
		}}/>
	    </Stack.Navigator>
	</NavigationContainer>
    )
}

export default App;

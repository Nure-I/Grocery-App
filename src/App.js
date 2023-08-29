// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Router from "./router";
import { useFonts } from "expo-font";

function App() {
	const [loaded] = useFonts({
		"Poppins-Medium": require("./../assets/fonts/Poppins-Medium.ttf"),
		"Poppins-Regular": require("./../assets/fonts/Poppins-Regular.ttf"),
		"Poppins-SemiBold": require("./../assets/fonts/Poppins-SemiBold.ttf"),
	});

	if (!loaded) {
		return null;
	}
	return (
		<NavigationContainer>
			<Router />
		</NavigationContainer>
	);
}

export default App;

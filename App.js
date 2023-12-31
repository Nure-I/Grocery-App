import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Router from "./src/router";

function App() {
	return (
		<NavigationContainer>
			<Router />
		</NavigationContainer>
	);
}

export default App;

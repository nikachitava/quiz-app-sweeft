import { Stack } from "expo-router";
import "../global.css";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [fontsLoaded] = useFonts({
		"Rubik-Bold": require("../assets/fonts/Rubik-Bold.ttf"),
		"Rubik-ExtraBold": require("../assets/fonts/Rubik-ExtraBold.ttf"),
		"Rubik-Light": require("../assets/fonts/Rubik-Light.ttf"),
		"Rubik-Medium": require("../assets/fonts/Rubik-Medium.ttf"),
		"Rubik-Regular": require("../assets/fonts/Rubik-Regular.ttf"),
		"Rubik-SemiBold": require("../assets/fonts/Rubik-SemiBold.ttf"),
	});

	useEffect(() => {
		if (fontsLoaded) {
			SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) return null;

	return (
		<QueryClientProvider client={queryClient}>
			<Stack screenOptions={{ headerShown: false }}>
				<Stack.Screen name="index" />
				<Stack.Screen name="quiz" />
				<Stack.Screen name="quizonboard" />
				<Stack.Screen name="results" />
			</Stack>
		</QueryClientProvider>
	);
}

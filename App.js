import React, { useEffect, useState } from "react";
import { StyleSheet, View, Animated } from "react-native";
import { NativeRouter, Route, Switch, useLocation } from "react-router-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

import LandingPage from "./src/screens/LandingPage";
import LoginPage from "./src/screens/LoginPage";
import { fontConfig } from "./src/config/fonts";

SplashScreen.preventAutoHideAsync();

const AnimatedSwitch = ({ children }) => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState(location);
  const slideAnim = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (location !== prevLocation) {
      slideAnim.setValue(100);
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
      setPrevLocation(location);
    }
  }, [location, prevLocation, slideAnim]);

  return (
    <Animated.View style={{ flex: 1, transform: [{ translateX: slideAnim }] }}>
      <Switch location={location}>{children}</Switch>
    </Animated.View>
  );
};

const AnimatedApp = () => {
  return (
    <View style={styles.container}>
      <AnimatedSwitch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={LoginPage} />
      </AnimatedSwitch>
    </View>
  );
};

export default function App() {
  const [fontsLoaded, fontError] = useFonts(fontConfig);

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <NativeRouter>
      <AnimatedApp />
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

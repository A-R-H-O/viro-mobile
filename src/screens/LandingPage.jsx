import React, { useMemo } from "react";
import {
  Animated,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { Video } from "expo-av";
import { withRouter } from "react-router-native";
import OpacityBackground from "../components/atoms/OpacityBackground";
import Logo from "../../assets/viro-logo.svg";

// Separate components
const TopButtons = () => (
  <View style={styles.topButtons}>
    <TouchableOpacity>
      <Text style={styles.skipText}>Skip</Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <Text style={styles.helpText}>Help</Text>
    </TouchableOpacity>
  </View>
);

const LandingContent = ({ history }) => (
  <View>
    <Text style={styles.landingTitle}>
      Inspire real-world change with your audience.
    </Text>
    <Text style={styles.landingDescription}>
      Viro allows you to bring change to your communities in real-time through
      your audience.
    </Text>
    <TouchableOpacity onPress={() => history.push("/login")}>
      <View style={styles.landingCTA}>
        <Text style={styles.ctaText}>Get Started</Text>
      </View>
    </TouchableOpacity>
  </View>
);

// Main component
const LandingPage = ({ history }) => {
  const opacity = useMemo(() => new Animated.Value(0), []);
  const handleVideoLoad = () => {
    Animated.timing(opacity, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <OpacityBackground
      backgroundElement={
        <Video
          source={require("../../assets/landing-page-bg-video.mp4")}
          style={{ flex: 1, width: "100%", height: "100%" }}
          resizeMode="cover"
          isLooping
          isMuted
          shouldPlay
        />
      }
      opacity={0.9}
    >
      <TopButtons />
      <Logo />
      <LandingContent history={history} />
    </OpacityBackground>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "black",
  },
  backgroundViewWrapper: {
    ...StyleSheet.absoluteFillObject,
  },
  video: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
  },
  topButtons: {
    display: "flex",
    width: 600,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  skipText: {
    color: "#F4F7F5",
    fontFamily: "Archivo-Regular",
  },
  helpText: {
    color: "#70EE9C",
    fontFamily: "Archivo-Regular",
  },
  landingTitle: {
    color: "#E1E1E2",
    fontFamily: "Archivo-Bold",
    fontSize: 26,
    textAlign: "center",
  },
  landingDescription: {
    color: "#C4C4C8",
    fontSize: 18,
    fontFamily: "Archivo-Regular",
    textAlign: "center",
    margin: 26,
  },
  landingCTA: {
    backgroundColor: "#70EE9C",
    padding: 18,
    borderRadius: 100,
  },
  ctaText: {
    textAlign: "center",
    fontFamily: "Archivo-Semibold",
    fontSize: 22,
  },
});

export default withRouter(LandingPage);

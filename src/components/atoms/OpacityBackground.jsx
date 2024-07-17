import React from "react";
import { View, StyleSheet, Animated } from "react-native";

export default function OpacityBackground({
  children,
  backgroundElement,
  opacity = 1,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Animated.View style={[styles.backgroundViewWrapper, { opacity }]}>
          {backgroundElement}
        </Animated.View>
      </View>
      <View style={styles.overlay}>{children}</View>
    </View>
  );
}

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
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
  },
});

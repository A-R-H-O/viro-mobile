import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import OpacityBackground from "../components/atoms/OpacityBackground";
import LoginForm from "../components/forms/authForms/LoginForm";
import FederatedLoginButtons from "../components/forms/authForms/FederatedButtons";
import { COLORS, FONTS } from "../config/constants";

const LoginPage = () => {
  return (
    <OpacityBackground
      backgroundElement={
        <Image
          style={styles.image}
          source={require("../../assets/auth-bg-image.png")}
          contentFit="cover"
        />
      }
    >
      <View style={styles.content}>
        <Text style={styles.title}>
          Dive back in, make your{" "}
          <Text style={styles.highlightedText}>mark...</Text>
        </Text>
        <LoginForm />
        <Text style={styles.loginForgetText}>Forgot Password?</Text>
        <View style={styles.loginDividerContent}>
          <View style={styles.loginDivider} />
          <Text style={styles.loginDividerText}>or</Text>
          <View style={styles.loginDivider} />
        </View>
        <FederatedLoginButtons />
        <Text style={styles.accountText}>
          Don't have an account?{" "}
          <TouchableOpacity>
            <Text style={styles.accountTextHighlight}>Sign up!</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </OpacityBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  content: {
    flex: 1,
    width: "100%",
    alignItems: "flex-start",
    paddingTop: 68,
    paddingLeft: 26,
    paddingRight: 26,
  },
  title: {
    color: COLORS.TEXT,
    fontFamily: FONTS.INTER_MEDIUM,
    fontSize: 35,
    textAlign: "left",
  },
  highlightedText: {
    color: COLORS.PRIMARY,
    fontFamily: FONTS.INTER_BOLD,
  },
  loginDividerContent: {
    marginTop: 28,
    marginBottom: 28,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  loginDivider: {
    borderBottomColor: "#464646",
    borderBottomWidth: 1,
    width: "43%",
  },
  loginDividerText: {
    margin: 11,
    color: "#B0B0B3",
    fontFamily: "Mulish-Bold",
  },
  loginForgetText: {
    marginTop: -12,
    fontFamily: FONTS.ARCHIVO_SEMIBOLD,
    width: "100%",
    color: "#F5F5F5",
    textAlign: "center",
  },
  accountText: {
    color: "#F5F5F5",
    fontFamily: "Mulish-Regular",
    fontSize: 12,
    width: "100%",
    marginTop: 124,
    marginBottom: 48,
    textAlign: "center",
  },
  accountTextHighlight: {
    fontSize: 12,
    fontFamily: "Mulish-Semibold",
    color: "#70EE9C",
    marginBottom: -3,
  },
});

export default LoginPage;

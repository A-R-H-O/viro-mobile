import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { FONTS, COLORS } from "../../../config/constants";
import GoogleIcon from "../../../../assets/google-icon.svg";
import AppleIcon from "../../../../assets/apple-icon.svg";

/**
 * These buttons allow the user to sign-up, or login
 * if they already have an account made through one of these.
 */
const FederatedLoginButtons = () => {
  return (
    <View style={styles.container}>
      <FederatedButton
        icon={<GoogleIcon />}
        text="Google"
        onPress={() => {
          /* Google login logic */
        }}
      />
      <FederatedButton
        icon={<AppleIcon />}
        text="Apple"
        onPress={() => {
          /* Apple login logic */
        }}
      />
    </View>
  );
};

const FederatedButton = ({ icon, text, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.federatedButton}>
      {icon}
      <Text style={styles.federatedButtonText}>{text}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 14,
  },
  federatedButton: {
    width: 158.5,
    height: 52,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
    borderColor: COLORS.WHITE,
    borderWidth: 1,
    borderRadius: 100,
  },
  federatedButtonText: {
    color: COLORS.WHITE,
    fontFamily: FONTS.MULISH_SEMIBOLD,
    fontSize: 16,
  },
});

export default FederatedLoginButtons;

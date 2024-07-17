import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { FormItem } from "react-native-form-component";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-regular-svg-icons";
import { COLORS, FONTS } from "../../config/constants";

const EyeIcon = ({ icon }) => (
  <FontAwesomeIcon
    icon={icon}
    style={{ color: "#FEFEFE", height: 18, width: 18 }}
  />
);

export const HandleInput = () => (
  <FormItem
    style={styles.textInput}
    labelStyle={styles.textInputLabel}
    textInputStyle={styles.textInputValue}
    isRequired={true}
    label="Handle"
    placeholder="@handle"
    accessibilityLabel="Enter your handle"
  />
);

export const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormItem
      style={styles.textInput}
      labelStyle={styles.textInputLabel}
      textInputStyle={styles.textInputValue}
      isRequired={true}
      label="Password"
      placeholder="Password"
      secureTextEntry={!showPassword}
      showIcon={<EyeIcon icon={showPassword ? faEye : faEyeSlash} />}
      onIconPress={() => setShowPassword(!showPassword)}
      accessibilityLabel="Enter your password"
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 52,
    width: "100%",
    borderRadius: 14,
    borderWidth: 2,
    borderColor: COLORS.PLACEHOLDER,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    paddingLeft: 16,
    paddingRight: 16,
  },
  textInputLabel: {
    marginBottom: 8,
    color: COLORS.PLACEHOLDER,
    fontSize: 16,
    fontFamily: FONTS.ARCHIVO_MEDIUM,
  },
  textInputValue: {
    color: COLORS.PLACEHOLDER,
    fontFamily: FONTS.MULISH_REGULAR,
  },
});

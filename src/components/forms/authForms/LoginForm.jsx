import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import { Form } from "react-native-form-component";
import { HandleInput, PasswordInput } from "../../molecules/InputComponents";
import { COLORS, FONTS } from "../../../config/constants";

const LoginForm = () => {
  const [error, setError] = useState(null);

  const handleSubmit = () => {
    // Implement form submission logic here
    // For now, just setting a mock error
    setError("Invalid credentials");
  };

  return (
    <>
      <Form
        buttonStyle={styles.loginButton}
        buttonTextStyle={styles.loginButtonText}
        buttonText="Continue"
        style={styles.formContent}
        onButtonPress={handleSubmit}
      >
        <HandleInput />
        <PasswordInput />
      </Form>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  formContent: {
    width: "100%",
    paddingTop: 30,
  },
  loginButton: {
    height: 52,
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 100,
    marginTop: 10,
  },
  loginButtonText: {
    color: "#000000",
    fontFamily: FONTS.ARCHIVO_SEMIBOLD,
    fontSize: 16,
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginTop: 10,
  },
});

export default LoginForm;

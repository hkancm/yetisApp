import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
const CustomInput = ({
  label,
  error,
  password,
  onFocus = () => {},
  ...props
}) => {
  const [hidePassword, setHidePassword] = useState(password);
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.labelWrapper}>
        <Text>{label}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={hidePassword}
          {...props}
        />
        {password && (
          <Feather
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? "eye" : "eye-off"}
            color={hidePassword ? "gray" : "rgba(214,0,0,.5)"}
          />
        )}
      </View>
      {error && (
        <Text style={{ marginTop: 7, color: "rgba(214,0,0,.5)", fontSize: 12 }}>
          {error}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 10,
    gap: 5,
  },
  labelWrapper: {},
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 4,
  },
  input: {
    width: "90%",
  },
});
export default CustomInput;

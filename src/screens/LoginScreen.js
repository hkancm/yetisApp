import React, { useContext, useState } from "react";
import {
  Button,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Keyboard,
} from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { AuthContext } from "../contexts/AuthContext";

const LoginScreen = ({ navigation }) => {
  const { login } = useContext(AuthContext);

  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const emailValidate = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      return false;
    } else return true;
  };
  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.email) {
      handleError("Please input email", "email");
      isValid = false;
    } else if (!emailValidate(inputs.email)) {
      handleError("Please input a valid email", "email");
      isValid = false;
    }

    if (!inputs.password) {
      handleError("Please input password", "password");
      isValid = false;
    }
    if (isValid) {
      login(inputs).then((res) => {
        console.log(res.data);
        if (res.data.token) {
          navigation.navigate("MainScreen");
        }
      });
    }
  };
  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.top}></View>
      <View style={styles.form}>
        <CustomInput
          label={"E-mail"}
          placeholder={"E-mail"}
          keyboardType={"email-address"}
          onChangeText={(text) => handleOnchange(text, "email")}
          onFocus={() => handleError(null, "email")}
          error={errors.email}
        />
        <CustomInput
          label={"Password"}
          placeholder={"Password"}
          password
          onChangeText={(text) => handleOnchange(text, "password")}
          onFocus={() => handleError(null, "password")}
          error={errors.password}
        />
        <View style={styles.buttonWrapper}>
          <CustomButton title={"Login"} onPress={validate} />
        </View>
      </View>
      <View style={styles.footer}></View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: "100%",
  },
  top: {
    flex: 3,
    width: "100%",
  },
  form: {
    flex: 6,
    width: "100%",
    paddingHorizontal: 10,
  },
  buttonWrapper: {
    width: "40%",
    alignSelf: "center",
  },
  footer: {
    flex: 1,
    width: "100%",
  },
});

export default LoginScreen;

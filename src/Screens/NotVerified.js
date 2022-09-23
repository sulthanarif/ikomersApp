import { View, Text, Box, Center, Image, Button } from "native-base";
import Colors from "../colors";
import { TextInput } from "react-native";
import React from "react";

function NotVerified() {
  // const press alert
  const pressLogin = () => {
    alert("Your account has been verified");
  };

  const pressRegister = () => {
    alert("Your account successfully registered");
  };
  return (
    <Box flex={1} safeAreaTop>
      <Center w="full" h={650}>
        <Image
          source={require("../../assets/ikomers.png")}
          alt="Verified"
          size="xl"
          w={260}
        />
      </Center>
      <Box flex={2} justifyContent="center" alignItems="center">
        <Button
          mb={4}
          w="80%"
          h={12}
          bg={Colors.white}
          _pressed={{ bg: Colors.white}}
          _text={{ color: Colors.green }}
          onPress={pressLogin}
          borderWidth={1}
          borderRadius={10}
          borderColor={Colors.green}
        >
          Login
        </Button>
        <Button
          mb={4}
          w="80%"
          h={12}
          bg={Colors.green}
          _pressed={{ bg: Colors.green }}
          _text={{ color: Colors.white }}
          onPress={pressRegister}
          borderWidth={1}
          borderRadius={10}
          borderColor={Colors.green}
        >
          Register
        </Button>
      </Box>
    </Box>
  );
}

export default NotVerified;

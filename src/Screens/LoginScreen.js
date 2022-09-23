import {Text, Box, View, VStack, Button} from 'native-base'
import {Image, Heading, Input, Pressable} from "native-base"
import { MaterialIcons, FontAwesome5} from '@expo/vector-icons';
import React from 'react'
import Colors  from '../colors';

function LoginScreen() {
  return (
    <Box flex={1}>
        <Image flex={1} alt="Login Screen" resizeMode="cover" size="lg" w="full"
        source={require('../../assets/bekgron1.png')}/>

        <Box 
        w="full"
        h="full"
        position="absolute"
        top="0"
        px="6"
        justifyContent="center">
          <Heading color={Colors.black}>LOGIN</Heading>

          <VStack space={8} pt="6">
           
            {/* Email */}

            <Input 
            InputLeftElement={<MaterialIcons name="email" size={22} color={Colors.green} />}

            variant="underlined" placeholder="youremail@email.com" w="70%"
            pl={2}
            color={Colors.green}
            borderBottomColor={Colors.green}
            />

            {/* Password */}
            
            <Input 
            InputLeftElement={<FontAwesome5 name="key" size={22} color={Colors.green} />}

            variant="underlined" placeholder="*************" w="70%"
            type="password"
            pl={2}
            color={Colors.green}
            borderBottomColor={Colors.green}/>
          </VStack>

          <Button _pressed={{
            bg: Colors.green
          }} my={30} w="40%" rounded={50} bg={Colors.green}>
            LOGIN
          </Button>
          <Pressable mt={4}>
            <Text color={Colors.green}>Forgot Password?</Text>
            <Text color={Colors.green}>Create an account</Text>
          </Pressable>
        </Box>
    </Box>
  )
}

export default LoginScreen
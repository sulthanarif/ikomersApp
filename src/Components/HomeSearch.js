import React from 'react'
import {Box,Text, HStack,Input} from 'native-base';
import Color from '../colors';
import { Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
function HomeSearch() {
  return (
   <HStack space={5} w="full" px={6} bg={Color.green} py={4} alignItems="center" safeAreaTop>
    <Input placeholder="sepatu, topi, speda" bg={Color.white} borderRadius={10} w="86%" h={12} px={4} type="search" _focus={{bg: Color.white}}variant="filled"/>

    <Pressable>
        <FontAwesome name="shopping-cart" size={24} color={Color.white} />
        <Box px={1} rounded="full" position="absolute" top={-6} left={4} bg={Color.red} _text={{
            color: Color.white, fontSize: 10, fontWeight: "bold"
        }}>
            9
        </Box>
    </Pressable>

   </HStack>
  )
}

export default HomeSearch
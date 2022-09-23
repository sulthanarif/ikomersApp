
import React from 'react';
import { View, Text, Box, Center, Image, Button } from "native-base";
import Colors from "../colors";
import HomeProduct from '../Components/HomeProduct';
import HomeSearch from '../Components/HomeSearch';
function HomeScreen() {
  return (
    <Box flex={1} bg={Colors.white} >
      <HomeSearch/>
      <HomeProduct/>
    </Box>
  )
}

export default HomeScreen
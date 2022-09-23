import React from "react";
import { Flex, ScrollView, Text, Image} from "native-base";
import Product from "../../data/Product";
import { Pressable } from "react-native";
import Color from "../colors";
import {FontAwesome, MaterialIcons} from "@expo/vector-icons";

function HomeProduct() {
  return (
    <ScrollView flex={1}>
      <Flex
        flexWrap="wrap"
        flexDirection="row"
        justifyContent="space-between"
        px={6}
      >
        {Product.map((Product, index) => (
          <Pressable
            key={index}
            style={{
              width: "48%",
              height: 240,
              marginTop: 10,
              backgroundColor: Color.white,
              borderRadius: 10,
              marginBottom: 5,
              elevation: 5,
              
              onPress: () => {
                console.log("Pressed");
              }

            }}
          >

            <Image
              src={Product.image}
              alt="image"
              style={{
                width: "100%",
                height: 120,
                resizeMode: "cover",
                marginBottom: 10,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
            />
            <Flex
              px={1}
            >
            <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 10 }}>
              {Product.name}
            </Text>
            
            <Text style={{ fontSize: 15, marginLeft: 10 }}>
              {Product.description}
            </Text>
            <Text style={{ fontSize: 15, marginLeft: 10 , color:Color.green, fontWeight:"bold",}}>
              {Product.price}
              
            </Text>
            {/* seller */}
            <Text style={{ fontSize: 15, marginLeft: 10 }}>
              {Product.seller}
              <MaterialIcons name="verified" size={10} color="black" />
            </Text>
            {/* freeship */}
            <FontAwesome name="truck" size={20} color={Color.green} style={{position:"absolute", alignItems:"center", right:9, }}/>
            </Flex>
            

            <Pressable style={{position:"absolute", top:10, right:10}}>
              <FontAwesome name="heart" variant="outline" size={24} color={Color.red} />
            </Pressable>

            

            {/* product rating with starts*/}
            <Flex
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              px={4} 
            >
              <Flex flexDirection="row" alignItems="center">
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                  {Product.rating}
                </Text>
                <Text style={{ fontSize: 15, color: Color.gray }}>
                  ({Product.numReviews})
                </Text>
              </Flex>
              <Flex flexDirection="row" alignItems="center">
                <FontAwesome name="star" size={15} color={Color.yellow} />
                <FontAwesome name="star" size={15} color={Color.yellow} />
                <FontAwesome name="star" size={15} color={Color.yellow} />
                <FontAwesome name="star" size={15} color={Color.yellow} />
                <FontAwesome name="star" size={15} color={Color.gray} />
                </Flex>
            </Flex>
          

          </Pressable>
        ))}
      </Flex>
    </ScrollView>
  );
}

export default HomeProduct;

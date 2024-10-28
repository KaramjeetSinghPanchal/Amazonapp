import { useFonts } from "expo-font";
import React from "react";
import { View, Text, StyleSheet, Image, TextInput,TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Shopnow from "./Shopnow";
import { DrawerNavigationProp } from "@react-navigation/drawer";
type LoginScreenProps = {
  navigation: DrawerNavigationProp<{
    Shopnow: undefined;
    Signup: undefined;
  }>;
};

export default function Login({navigation}:LoginScreenProps) {
  let [fontsLoaded] = useFonts({
    "Manrope-Bold": require("../../assets/fonts/static/Outfit-Medium.ttf"),
  });

  const arr = [
    { id: "1", name: "Shopping", message: "Good Product" },
    { id: "2", name: "Cart", message: "Better Product" },
    { id: "3", name: "Track Order", message: "New Product" },
    { id: "4", name: "Offers", message: "Famous Product" },
  ];
  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontFamily: "Manrope-Bold", fontSize: 23 }}>
          Hello Karmjeeet Singh
        </Text>
        <Image
          source={require("@/assets/images/Group.png")}
          style={{ width: 90, height: 35, borderRadius: 10 }}
        />
      </View>

      <Text style={styles.subHeader}>Enjoy Shopping</Text>

      <View style={styles.searchContainer}>
        <AntDesign name="search1" style={styles.searchIcon} />
        <TextInput placeholder="Search" style={styles.searchInput} />
      </View>

      <View style={styles.grid}>
        {arr.map((itm, index) => (
          <View style={styles.box} key={itm.id}>
            <Image
              source={require("@/assets/images/Menu.png")}
              style={{ position: "absolute", left: 0, top: 0 }}
            />
            <Image
              source={require("@/assets/images/Shopping.png")}
              style={{ justifyContent: "center", alignSelf: "center" }}
            />

            <TouchableOpacity onPress={()=>navigation.navigate('Shopnow')}>
            <Text style={styles.text}>{itm.name}</Text>
            </TouchableOpacity>
         


            <Text style={styles.ProductDetails}>{itm.message}</Text>
            {itm.id === "3" ? (
              <View
                style={{
                  height: 50,
                  width: 120,
                  borderWidth: 0.5,
                  alignContent: "center",
                  alignSelf: "center",
                  borderRadius: 10,
                  marginTop: 20,
                }}
              >
                <Text style={{ alignSelf: "center" }}>{itm.message}</Text>
              </View>
            ) : (
              ""
            )}
          </View>
        ))}
      </View>

      <View
        style={{
          backgroundColor: "black",
          height: 40,
          width: 350,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            color: "white",
            alignSelf: "center",
            justifyContent: "center",
            padding: 10,
          }}
        >
          Shopping Cart offers track order Profile
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  subHeader: {
    color: "gray",
    marginLeft: 15,
    fontFamily: "Outfit-Regular",
    fontSize: 18,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    height: 40,
    width: 250,
    marginTop: 10,
    marginLeft: -2,
    borderRadius: 20,
    padding: 10,
  },
  searchIcon: {
    height: 10,
    width: 10,
  },
  searchInput: {
    marginLeft: 10,
    width: "100%",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
  },
  box: {
    height: 180,
    width: "46%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 15,
  },
  text: {
    fontFamily: "Outfit-Regular",
    fontSize: 20,
    // marginLeft: 35,
    justifyContent: "center",
    alignSelf: "center",
  },
  ProductDetails: {
    fontFamily: "Outfit-Regular",
    fontSize: 10,
    marginLeft: 45,
    marginTop: 2,
    color: "gray",
  },
});

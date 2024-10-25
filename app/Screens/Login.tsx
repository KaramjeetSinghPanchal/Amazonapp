import { useFonts } from "expo-font";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity,Image } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

export default function Login() {
  let [fontsloaded] = useFonts({
    "Manrope-Bold": require("../../assets/fonts/Manrope-VF.ttf"),
  });
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontFamily: "Manrope-Bold", fontSize: 15 }}>
          Hello Karmjeeet Singh
        </Text>

        <Text>
          {/* <TouchableOpacity> */}
          <Image source={require("@/assets/images/Group.png") } style={{width:50,height:35,borderRadius:10}}/>
          {/* </TouchableOpacity> */}
          {/* */}
        </Text>
      </View>

      <View><Text>Enjoy Shopping</Text> </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
});

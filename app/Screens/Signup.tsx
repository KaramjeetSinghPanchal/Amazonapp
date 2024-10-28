import React from "react";
import { View, Text } from "react-native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
type LoginScreenProps = {
  navigation: NativeStackNavigationProp<{
    Login: undefined;
    Signup: undefined;
  }>;
};
export default function Signup({ navigation }: LoginScreenProps) {
  return (
    <View>
      <Text>hello Sign in</Text>
    </View>
  );
}

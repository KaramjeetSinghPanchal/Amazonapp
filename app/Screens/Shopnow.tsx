import React from 'react'
import { View ,Text} from 'react-native'
import { DrawerNavigationProp } from "@react-navigation/drawer";

type Listingprops = {
    navigation: DrawerNavigationProp<{
      Login: undefined;
      Signup: undefined;
    }>;
  };
  export default function Shopnow({navigation}:Listingprops) {
    return (
    <View>
        <Text>
            all good
        </Text>
    </View>
  )
}

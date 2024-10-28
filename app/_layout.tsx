import Login from "./Screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AntDesign } from "@expo/vector-icons";
import Signup from "./Screens/Signup";
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{ headerShown: true }}
        initialRouteName="Login"
      >
        <Drawer.Screen
          name="Login"
          options={{
            title: "Login",
            headerStyle: {
              backgroundColor: "lightblue",
            },
            headerTintColor:'white'
          }}
          component={Login}
        />
        <Drawer.Screen
          name="Signup"
          options={{
            title: "Signup",
            headerStyle: { backgroundColor: "lightblue" },
          }}
          component={Signup}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

import Login from "./Screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Signup from "./Screens/Signup";
import Shopnow from "./Screens/Shopnow";
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Login"
      >
        <Drawer.Screen name="Login" options={{title:'Login',headerStyle:{
          backgroundColor:'lightblue'
        }}}  component={Login} />

         <Drawer.Screen name="Shopnow" options={{title:'Shopnow',headerStyle:{
          backgroundColor:'lightblue'
        }}}  component={Shopnow} />
        
        <Drawer.Screen name="Signup"  options={{title:'Signup', headerStyle:{backgroundColor:'lightblue'}}} component={Signup} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

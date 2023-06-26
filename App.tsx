import HomeScreen from "./screens/HomeScreen";

import ChartScreen from "./screens/ChartScreen";
import TableScreen from "./screens/TableScreen";
import {Colors} from "./style/style";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {StatusBar} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import Map from "./screens/Map";
import {Provider} from "react-redux";
import {dataStore} from "./store/store";




const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function StackNavigator() {
    return(
        <Stack.Navigator
            screenOptions={{
                headerStyle: {backgroundColor: Colors.primary400},
                headerTintColor: Colors.primary100,
            }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Map" component={Map} />
        </Stack.Navigator>
    )
}



export default function App() {
  return (
      <>
          <StatusBar barStyle='light-content'/>
          <Provider store={dataStore}>
          <NavigationContainer>
                <Tab.Navigator
                    initialRouteName="Home"
                    screenOptions={{
                        tabBarStyle: {backgroundColor: Colors.primary400},
                        headerStyle: {backgroundColor: Colors.primary400},
                        headerTintColor: Colors.primary100,
                        tabBarActiveTintColor: Colors.primary500,
                        tabBarInactiveTintColor: Colors.primary100
                    }}
                >
                  <Tab.Screen
                      name="Stack"
                      component={StackNavigator}
                      options={{
                          tabBarIcon: ({ color }) => <MaterialCommunityIcons name='home' color={color} size={24} />,
                          headerShown: false,

                      }}
                  />
                  <Tab.Screen
                      name="Chart"
                      component={ChartScreen}
                      options={{
                          tabBarIcon: ({ color }) => <MaterialCommunityIcons name='chart-pie' color={color} size={24} />
                      }}
                  />
                  <Tab.Screen
                      name="Table"
                      component={TableScreen}
                      options={{
                          tabBarIcon: ({ color }) => <MaterialCommunityIcons name='table' color={color} size={24} />
                      }}
                  />
                </Tab.Navigator>
          </NavigationContainer>
          </Provider>
      </>
  );
}

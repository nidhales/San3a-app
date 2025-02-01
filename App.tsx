import { Provider } from "react-redux"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { store } from "./app/store/store"
import LoginScreen from "./app/screens/LoginScreen"
import UserHomeScreen from "./app/screens/UserHomeScreen"
import WorkerHomeScreen from "./app/screens/WorkerHomeScreen"
import AdminHomeScreen from "./app/screens/AdminHomeScreen"

export type RootStackParamList = {
  Login: undefined
  UserHome: undefined
  WorkerHome: undefined
  AdminHome: undefined
}

const Stack = createStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="UserHome" component={UserHomeScreen} />
          <Stack.Screen name="WorkerHome" component={WorkerHomeScreen} />
          <Stack.Screen name="AdminHome" component={AdminHomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}


import { useState } from "react"
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native"
import type { StackNavigationProp } from "@react-navigation/stack"
import type { RootStackParamList } from "../../App"
import { useLoginMutation } from "../api/api"
import { jwtDecode } from "jwt-decode";

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, "Login">

type Props = {
  navigation: LoginScreenNavigationProp
}

export default function LoginScreen({ navigation }: Props) {
  const [username, setUsername] = useState("")
  console.log("LoginScreen ~ username:", username)
  const [password, setPassword] = useState("")
  console.log("LoginScreen ~ password:", password)
  const [login, { isLoading }] = useLoginMutation()

  const handleLogin = async () => {
    try {
      const response = await login({ username, password }).unwrap()
      console.log("handleLogin ~ response:", response)
      const token = response.token;
      const decodedToken: any = jwtDecode(token);
      console.log("handleLogin ~ decodedToken:", decodedToken)
      const userRole = decodedToken.role
      console.log("handleLogin ~ userRole:", userRole)

      // Navigate based on role
      if (userRole === "user") {
        navigation.navigate("UserHome")
      } else if (userRole === "worker") {
        navigation.navigate("WorkerHome")
      } else if (userRole === "admin") {
        navigation.navigate("AdminHome")
      } else {
        Alert.alert("Error", "Invalid role")
      }
    } catch (error) {
      Alert.alert("Login Failed", "Invalid username or password")
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input} placeholder="Username" value={username} onChangeText={setUsername} />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title={isLoading ? "Logging in..." : "Login"} onPress={handleLogin} disabled={isLoading} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
})

import { View, Text, StyleSheet, Button } from "react-native"

export default function WorkerHomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Worker Home</Text>
      <Button
        title="Edit Profile"
        onPress={() => {
          /* TODO: Implement profile editing */
        }}
      />
      <Button
        title="View Jobs"
        onPress={() => {
          /* TODO: Implement job viewing */
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
})


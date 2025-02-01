import { View, Text, StyleSheet, Button } from "react-native"

export default function AdminHomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin Home</Text>
      <Button
        title="Manage Users"
        onPress={() => {
          /* TODO: Implement user management */
        }}
      />
      <Button
        title="Manage Workers"
        onPress={() => {
          /* TODO: Implement worker management */
        }}
      />
      <Button
        title="View Analytics"
        onPress={() => {
          /* TODO: Implement analytics viewing */
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


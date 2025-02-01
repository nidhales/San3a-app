import { View, Text, StyleSheet, FlatList } from "react-native"
import MapView, { Marker } from "react-native-maps"
import { useGetWorkersQuery } from "./../api/api"
import type { Worker } from "./../types/types"

export default function UserHomeScreen() {
  const { data: workers, isLoading, error } = useGetWorkersQuery()

  if (isLoading) return <Text>Loading...</Text>
  if (error) return <Text>Error: {(error as Error).message}</Text>

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Home</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {workers?.map((worker) => (
          <Marker
            key={worker.id}
            coordinate={{ latitude: worker.location[1], longitude: worker.location[0] }}
            title={worker.profession}
            description={worker.description}
          />
        ))}
      </MapView>
      <FlatList
        data={workers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }: { item: Worker }) => (
          <View style={styles.workerItem}>
            <Text>{item.profession}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
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
  map: {
    width: "100%",
    height: "50%",
  },
  workerItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
})


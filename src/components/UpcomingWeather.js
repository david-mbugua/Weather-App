import React from 'react'
import { SafeAreaView, StyleSheet, Text, FlatList } from 'react-native'

const UpcomingWeather = () => {
  return (
    <SafeAreaView styles={styles.container}>
        <Text>Upcoming Wather</Text>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
export default UpcomingWeather
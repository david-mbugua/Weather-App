import React, { useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const Counter = () => {
  const [ count, setCount ] = useState(0)
  return ( 
    <View style={styles.container}>
      <Text style={styles.title}>{`count: ${count}`}</Text>
      <Button
        color={'red'}
        title={'Increase the count'}
        onPress={() => setCount(count + 1)}
      />
      <Button
        color={'green'}
        title={'Decrease the count'}
        onPress={() => setCount(count - 1)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange'
    },
    title: {
        fontSize: 25,
        alignSelf: 'center',
        marginTop: 25
    }
})
export default Counter

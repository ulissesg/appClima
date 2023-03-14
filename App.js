import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [previsao, setPrevisao] = useState()

  useEffect(() => {
    buscaPrevisao('pirulito')
  }, [])


  function buscaPrevisao() {
    axios.get('https://api.open-meteo.com/v1/forecast?latitude=24.3&longitude=52&current_weather=true&hourly=temperature_2m')
      .then(function (res) {
        console.log(res.data)
        setPrevisao(res.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 100}}>{previsao?.current_weather?.temperature} ºC</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

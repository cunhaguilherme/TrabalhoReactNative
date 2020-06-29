import React from 'react';

import { Text } from 'native-base';

import { View , StyleSheet} from 'react-native';

const CircuitDetail = ({ circuit, location }) => {
    console.log('Entrou no CircuitDetail.js')
    console.log(circuit)
    console.log(circuit.circuitName)
    console.log(circuit.Location)

    // {
    //   "circuitId": "albert_park",
    //   "url": "http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit",
    //   "circuitName": "Albert Park Grand Prix Circuit",
    //   "Location": {
    //       "lat": "-37.8497",
    //       "long": "144.968",
    //       "locality": "Melbourne",
    //       "country": "Australia"
    //   }
    // } 

    let {itemStyle, itemText} = styles
    return ( 
        <View style={itemStyle}>
          <Text style={itemText}><Text style={{fontWeight: "bold", color: "#fff", fontFamily: "Arial"}}>Circuito: </Text>{ `${circuit.circuitName} ` }</Text>
          <Text style={itemText}><Text style={{fontWeight: "bold", color: "#fff", fontFamily: "Arial"}}>Local: </Text>{ `${location.locality}` }</Text>
          <Text style={itemText}><Text style={{fontWeight: "bold", color: "#fff", fontFamily: "Arial"}}>Pais: </Text>{ `${location.country}` }</Text>
          {/* <Text style={itemText}><Text style={{fontWeight: "bold", color: "#fff", fontFamily: "Arial"}}>Localidade: </Text>{ circuit.Location }</Text>
          <Text style={itemText}><Text style={{fontWeight: "bold", color: "#fff", fontFamily: "Arial"}}>País: </Text>{ circuit.Location }</Text> */}
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 40
    },
    itemStyle: {
      backgroundColor: '#4a5c6b',
      height: 100,
      flex: 1,
      margin: 1,
      width: '99.5%',
      borderRadius: 5
    },
    itemText: {
      color: '#fff',
      fontSize: 20,
      paddingTop: '1%',
      paddingLeft: 10,
      fontFamily: "Arial"
    }
  });

export default CircuitDetail;


import React from 'react';

import { Text } from 'native-base';

import { View , StyleSheet} from 'react-native';

const ConstructorDetail = ({ constructor }) => {
    console.log('Entrou no ConstructorDetail.js')
    console.log(constructor)

    let {itemStyle, itemText} = styles
    return ( 
        <View style={itemStyle}>
          <Text style={itemText}><Text style={{fontWeight: "bold", color: "#fff", fontFamily: "Arial"}}>Nome construtora: </Text>{ constructor.name }</Text>
          <Text style={itemText}><Text style={{fontWeight: "bold", color: "#fff", fontFamily: "Arial"}}>Nacionalidade: </Text>{ constructor.nationality }</Text>
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

export default ConstructorDetail;


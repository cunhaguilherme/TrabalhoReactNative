import React from 'react';

import { Button, Text } from 'native-base';

import { Picture } from '../../../assets/options.png';

import Style from '../style';
import { Image } from 'react-native';
import Home from '../index';

//const years = ['2020','2019', '2018', '2017'];

const Continue = ({ lastSeason, reloadList }) => {
    console.log(reloadList);
    return ( 
        
        <Button 
            style={ Style.button }
    onPress={ reloadList} >
            <Text style={ Style.text} >...</Text>
         </Button>
    );
}

export default Continue;
import React from 'react';

import { Button, Text } from 'native-base';

import { Image } from '../../../assets/options.png';

import Style from '../style';
import { ImageBackground } from 'react-native';

//const years = ['2020','2019', '2018', '2017'];

const Continue = ({ lastSeason }) => {
    return 
        <ImageBackground source={ Image } style={ Style.image} >
            <Button 
                style={ Style.button }
                onPress={ () => Home}
            >
                <Text>{ year.season }</Text>
            </Button>
        </ImageBackground>
}

export default Continue;
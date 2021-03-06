import React from 'react';

import Style from '../style';

import { Button, Text } from 'native-base';


//const options = ['Corridas','Pilotos','Construtores'];

const Options = ({ handlerOptions, options, year }) => {
    return options
        .map((option) => (
            <Button 
                key={ `option-${option}` }
                style={ Style.button }
                onPress={ () => handlerOptions('Option', { option: option, year: year })}
            >
                <Text style={ Style.text} >{ option }</Text>
            </Button>
        ));
}

export default Options;
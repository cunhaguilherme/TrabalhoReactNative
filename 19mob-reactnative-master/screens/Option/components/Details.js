import React from 'react';

import Style from '../style';

import { Button, Text } from 'native-base';



const Details = ({ /*handlerDetails, years */ details}) => {
    return details
        .map((detail) => (  
            <Button 
                key={ `detail-${detail}` }
                style={ Style.button }
                //onPress={ () => handlerSeason('Season', { year: year.season })}
            >
                <Text style={ Style.text} >{ detail }</Text>
            </Button>
        ));
}

export default Details;
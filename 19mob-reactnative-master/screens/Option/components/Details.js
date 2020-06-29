import React from 'react';

import Style from '../style';

import { Button, Text } from 'native-base';

const Details = ({ handlerDetails, details, option, year}) => {
//const Details = ({ handlerDetails, detailId , option, year}) => {
    console.log('entrou map details Details.js')
    console.log(details)
    console.log(option)
    console.log(year)

    if (option == 'drivers'){
    return details
        
        .map((detail) => (  
            <Button 
            key={ `detail-${detail}` }
            style={ Style.button }
            onPress={ () => handlerDetails('Detail', { detailId: detail.driverId, option: option, year: year })}
            >
           
                <Text style={ Style.text} >{ `${detail.givenName} ${detail.familyName}` }</Text>
            </Button>
        ));
    }else if (option == 'constructors'){
        return details
        
        .map((detail) => (  
            <Button 
            key={ `detail-${detail}` }
            style={ Style.button }
            onPress={ () => handlerDetails('Detail', { detailId: detail.constructorId, option: option, year: year })}
            >
           
                <Text style={ Style.text} >{ `${detail.name}` }</Text>
            </Button>
        ));

    }else if (option == 'circuits'){
        return details        
        
        .map((detail) => (  
            <Button 
            key={ `detail-${detail}` }
            style={ Style.button }
            onPress={ () => handlerDetails('Detail', { detailId: detail.circuitId, option: option, year: year })}
            >
           
                <Text style={ Style.text} >{ `${detail.circuitName} ` }</Text>
            </Button>
        ));

    }


}

export default Details;
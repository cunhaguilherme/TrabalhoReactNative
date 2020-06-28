import React from 'react';

import Style from '../style';

import { Button, Text } from 'native-base';



const Details = ({ /*handlerDetails, years */ details, option}) => {
    console.log(details)
    console.log(option)
    if (option == 'drivers'){
    return details
        
        .map((detail) => (  
            <Button 
                key={ `detail-${detail}` }
                style={ Style.button }
                //onPress={ () => handlerSeason('Season', { year: year.season })}
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
                //onPress={ () => handlerSeason('Season', { year: year.season })}
            >   
           
                <Text style={ Style.text} >{ `${detail.name}` }</Text>
            </Button>
        ));

    }else {
        return details
        
        .map((detail) => (  
            <Button 
                key={ `detail-${detail}` }
                style={ Style.button }
                //onPress={ () => handlerSeason('Season', { year: year.season })}
            >   
           
                <Text style={ Style.text} >{ `${detail.circuitName} ` }</Text>
            </Button>
        ));

    }


}

export default Details;
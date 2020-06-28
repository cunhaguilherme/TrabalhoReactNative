import React from 'react';

import Style from '../style';

import { Button, Text } from 'native-base';

//const years = ['2020','2019', '2018', '2017'];

const Seasons = ({ handlerSeason, years }) => {
    return years
        .map((year) => (  
            <Button 
                key={ `season-${year.season}` }
                style={ Style.button }
                onPress={ () => handlerSeason('Season', { year: year.season })}
            >
                <Text style={ Style.text} >{ year.season }</Text>
            </Button>
        ));
}

export default Seasons;
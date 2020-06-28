import React, { Component, useState } from 'react';
import { SafeAreaView} from 'react-native-safe-area-context';

import Seasons from './components/Seasons';
import Continue from './components/Continue';
import { ScrollView } from 'react-native-gesture-handler';

class Home extends Component {
    
    state = {
        result: [],
        list: [],
        lastSeason: 5,
    }

    reloadList = () => {
        this.setState(
            loadState => ({ lastSeason: loadState.lastSeason + 5 })
        );
        this.componentDidMount(); 
    }

    componentDidMount() {
        fetch('https://ergast.com/api/f1/seasons.json?limit=100')
            .then(response => response.json())
            .then(result => {
                this.setState({ result: result.MRData.SeasonTable.Seasons.reverse()}) //= result.MRData.SeasonTable.Seasons.reverse().slice(0,10);
                this.setState({ list: this.state.result.slice(0, this.state.lastSeason) });
                //result.MRData.SeasonTable.Seasons.map(year => { if( year.season >= 2010) {array.push(year.season);}})
                           
            })
            .catch(err => {
                console.log(err);
            })
    
    }

    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <Seasons 
                        handlerSeason={ this.props.navigation.navigate } years={ this.state.list } />
                    <Continue lastSeason={ this.state.lastSeason } reloadList={ this.reloadList} />
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default Home;